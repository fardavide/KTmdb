package studio.forface.ktmdb.servicebuilder

import io.ktor.client.request.get
import kotlinx.coroutines.*
import kotlinx.serialization.KSerializer
import kotlinx.serialization.json.JSON
import kotlinx.serialization.serializer
import studio.forface.ktmdb.annotations.*
import studio.forface.ktmdb.api.TmdbApi
import studio.forface.ktmdb.entities.Movie
import studio.forface.ktmdb.exceptions.IllegalAnnotationException
import java.lang.IllegalArgumentException
import java.lang.reflect.Method
import java.lang.reflect.Parameter
import java.lang.reflect.Proxy
import java.io.File
import java.io.IOException
import kotlin.reflect.KClass


/**
 * @author Davide Giuseppe Farella.
 */
actual object ServiceBuilder {

    actual inline fun <reified S> createService( tmdbApi: TmdbApi ): S {
        val apiKey = tmdbApi.apiKey
        val baseUrl = TmdbApi.BASE_URL
        val client = tmdbApi.client
        val logging = tmdbApi.logging

        val apiServiceAnnotation = S::class.java.getAnnotation( ApiService::class.java )
                ?: throw IllegalAnnotationException( "The service must be annotated with ${ApiService::class.qualifiedName}" )
        val apiVersion = apiServiceAnnotation.apiVersion
        val endpoint = apiServiceAnnotation.endpoint

        return Proxy.newProxyInstance(
                S::class.java.classLoader,
                arrayOf<Class<*>>( S::class.java )
        ) { proxy, method, args ->

            val apiMethod = findApiMethod( method )

            val url = Url("$baseUrl/$apiVersion/$endpoint/${apiMethod.s}" )
            var hasQuery = false

            method.parameters
                    .mapIndexedNotNull { index, parameter ->
                        val apiParam = findApiParam( parameter )    ?: return@mapIndexedNotNull null
                        val arg = args[index]                       ?: return@mapIndexedNotNull null
                        apiParam to arg.toString()
                    }
                    .forEach {
                        val arg = it.second
                        when ( val ann = it.first ) {
                            is ApiParams.Path ->    url.setPath( ann.s, arg )
                            is ApiParams.Query ->   url.addQuery( ann.s, arg )
                        }
                    }

            url.addQuery( "api_key", apiKey )
            if ( logging ) println( url )

            GlobalScope.async {
                when (apiMethod) {
                    is ApiMethod.GET -> {
                        val data = client.get<String>( url.toString() )
                        val serializer = serializerFrom( method )
                        serializer?.let { JSON.parse( it, data ) } ?: data
                    }
                    is ApiMethod.PUT -> TODO()
                }
            }
        } as S
    }

    /**
     * Find an [ApiMethod] annotation for the given [method].
     * @return [ApiMethod].
     * @throws IllegalAnnotationException if no annotation is found.
     */
    fun findApiMethod( method: Method ): ApiMethod {
        return     method.getAnnotation( GET::class.java )?.let { ApiMethod.GET( it.s ) }
                ?: method.getAnnotation( PUT::class.java )?.let { ApiMethod.PUT( it.s ) }

                ?: throw IllegalAnnotationException( "No ${ApiMethod::class.qualifiedName} annotation found for method: ${method.name}" )
    }

    /**
     * Find an [ApiParams] annotation for the given [parameter].
     * If no annotations is found, null will be returned and the [parameter] will be skipped.
     * @return OPTIONAL [ApiParams].
     */
    fun findApiParam( parameter: Parameter ): ApiParams? {
        return     parameter.getAnnotation( Path::class.java )?.let { ApiParams.Path( it.path ) }
                ?: parameter.getAnnotation( Query::class.java )?.let { ApiParams.Query( it.query ) }
    }

    /**
     * Get a [KSerializer] for the given [method].
     */
    fun serializerFrom( method: Method ): KSerializer<*>? {
        val typeName = method.genericReturnType.typeName
        return ENTITIES.find { typeName.contains( it.qualifiedName!! ) }?.serializer()
    }

    /**
     * A [Array] containing all the [KClass]es in the 'entities' package.
     */
    private val ENTITIES by lazy { getClasses() }

    /**
     * Scans all classes accessible from the context class loader which belong to the given package and subpackages.
     *
     * @return The classes
     * @throws ClassNotFoundException
     * @throws IOException
     */
    @Throws(ClassNotFoundException::class, IOException::class)
    private fun getClasses(): Array<KClass<*>> {
        val classLoader = Thread.currentThread().contextClassLoader!!
        val path = "studio/forface/ktmdb/entities"
        val resources = classLoader.getResources(path)
        val dirs = mutableListOf<File>()
        while ( resources.hasMoreElements() ) {
            val resource = resources.nextElement()
            dirs.add( File( resource.file ) )
        }
        val classes = mutableListOf<KClass<*>>()
        for ( directory in dirs ) {
            classes.addAll( findClasses( directory, path.replace('/','.' ) ) )
        }
        return classes.toTypedArray()
    }

    /**
     * Recursive method used to find all classes in a given directory and subdirs.
     *
     * @param directory   The base directory
     * @param packageName The package name for classes found inside the base directory
     * @return The classes
     * @throws ClassNotFoundException
     */
    @Throws(ClassNotFoundException::class)
    private fun findClasses( directory: File, packageName: String ): List<KClass<*>> {
        val classes = mutableListOf<KClass<*>>()
        if ( ! directory.exists() ) {
            return classes
        }
        val files = directory.listFiles()
        for ( file in files ) {
            if ( file.isDirectory ) {
                assert( ! file.name.contains("." ) )
                classes.addAll( findClasses( file, packageName + "." + file.name ) )
            } else if (file.name.endsWith(".class")) {
                classes.add(
                        Class.forName(packageName + '.'.toString() +
                                file.name.substring( 0, file.name.length - 6 ) ).kotlin
                )
            }
        }
        return classes
    }
}