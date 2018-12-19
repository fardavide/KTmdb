package studio.forface.ktmdb.servicebuilder

import io.ktor.client.call.call
import io.ktor.client.request.forms.*
import io.ktor.client.request.header
import io.ktor.client.request.parameter
import io.ktor.client.request.request
import io.ktor.content.TextContent
import io.ktor.http.HttpMethod
import io.ktor.http.takeFrom
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.async
import kotlinx.serialization.KSerializer
import kotlinx.serialization.json.JSON
import kotlinx.serialization.serializer
import studio.forface.ktmdb.annotations.*
import studio.forface.ktmdb.api.TmdbApi
import studio.forface.ktmdb.exceptions.IllegalAnnotationException
import studio.forface.ktmdb.utils.get
import studio.forface.ktmdb.utils.post
import java.io.File
import java.lang.StringBuilder
import java.lang.reflect.Method
import java.lang.reflect.Parameter
import java.lang.reflect.Proxy
import kotlin.reflect.KClass

/**
 * @author Davide Giuseppe Farella.
 */
actual object ServiceBuilder {

    /** An instance of [JSON] */
    val json = JSON( strictMode = false )

    actual inline fun <reified S> createService( tmdbApi: TmdbApi ): S {
        val accessToken = { tmdbApi.accessToken ?: tmdbApi.apiV4ReadAccessToken }
        val apiKey = tmdbApi.apiKey
        val baseUrl = TmdbApi.BASE_URL
        val client = tmdbApi.client
        val logging = tmdbApi.logging
        val sessionId = { tmdbApi.sessionId }

        val apiServiceAnnotation = S::class.java.getAnnotation( ApiService::class.java )
                ?: throw IllegalAnnotationException(
                        "The service must be annotated with ${ApiService::class.qualifiedName}"
                )
        val apiVersion = apiServiceAnnotation.apiVersion
        val endpoint = apiServiceAnnotation.endpoint

        return Proxy.newProxyInstance(
                S::class.java.classLoader,
                arrayOf<Class<*>>( S::class.java )
        ) { _, method, args -> GlobalScope.async {

            // Get the ApiMethod
            val apiMethod = findApiMethod( method )

            // Get the ApiParam mapped with argument value
            val parameters = method.parameters.mapIndexedNotNull { index, parameter ->
                val apiParam = findApiParam( parameter )    ?: return@mapIndexedNotNull null
                val arg = args[index]                       ?: return@mapIndexedNotNull null
                apiParam to arg.toString()
            }

            // Get ApiParam.Body
            @Suppress("UNCHECKED_CAST")
            val bodies = parameters.filter { it.first is ApiParam.Body } as List<Pair<ApiParam.Body, String>>
            val bodyCount = bodies.size
            val paramBody = bodies.firstOrNull()

            // Get ApiParam.Field's
            @Suppress("UNCHECKED_CAST")
            val fields = parameters.filter { it.first is ApiParam.Field } as List<Pair<ApiParam.Field, String>>
            val hasFields = fields.isNotEmpty()

            // Get ApiParam.Path's
            @Suppress("UNCHECKED_CAST")
            val paths = parameters.filter { it.first is ApiParam.Path } as List<Pair<ApiParam.Path, String>>

            // Get ApiParam.Query's
            @Suppress("UNCHECKED_CAST")
            val queries = parameters.filter { it.first is ApiParam.Query } as List<Pair<ApiParam.Query, String>>

            // Check the preconditions
            preconditions( method.name, apiMethod, bodyCount, hasFields )


            val data = client.request<String> {

                this.method = when( apiMethod ) {
                    is ApiMethod.DELETE ->  HttpMethod.Delete
                    is ApiMethod.GET ->     HttpMethod.Get
                    is ApiMethod.POST ->    HttpMethod.Post
                    is ApiMethod.PUT ->     HttpMethod.Put
                }

                // Set the url
                url { _ ->
                    // Base url with paths
                    var rawUrl = "$baseUrl/$apiVersion/$endpoint/${apiMethod.s}"
                    paths.forEach { rawUrl = rawUrl.replace( it.first.s.toRegex(), it.second ) }
                    takeFrom( rawUrl )

                    // Queries
                    queries.forEach {
                        parameter( it.first.s, it.second )
                    }

                    parameter( "api_key", apiKey )
                    if ( apiVersion == ApiVersion.V3 )
                        sessionId()?.let { parameter( "session_id", it ) }
                }

                // Set the headers
                if ( apiVersion == ApiVersion.V4 )
                    header( "Authorization", "Bearer ${accessToken()}" )

                // Set the body
                paramBody?.let { body = it.second }

                // Set the fields
                if ( hasFields ) body = MultiPartFormDataContent( formData {
                    fields.forEach { append( it.first.s, it.second ) }
                } )

                //if ( hasFields ) body = fields.map { it.first.s to it.second }.toMap()
            }

            val serializer = serializerFrom( method )
            serializer?.let { json.parse( it, data ) } ?: data
        } } as S
    }

    /**
     * Find an [ApiMethod] annotation for the given [method].
     * @return [ApiMethod].
     * @throws IllegalAnnotationException if no annotation is found.
     */
    fun findApiMethod( method: Method ): ApiMethod {
        return     method.getAnnotation( DELETE::class.java )?.let { ApiMethod.DELETE( it.s ) }
                ?: method.getAnnotation( GET::class.java )   ?.let { ApiMethod.GET(    it.s ) }
                ?: method.getAnnotation( POST::class.java )  ?.let { ApiMethod.POST(   it.s ) }
                ?: method.getAnnotation( PUT::class.java )   ?.let { ApiMethod.PUT(    it.s ) }

                ?: throw IllegalAnnotationException(
                        "No ${ApiMethod::class.qualifiedName} annotation found for method: ${method.name}"
                )
    }

    /**
     * Find an [ApiParam] annotation for the given [parameter].
     * If no annotations is found, null will be returned and the [parameter] will be skipped.
     * @return OPTIONAL [ApiParam].
     */
    fun findApiParam( parameter: Parameter ): ApiParam? {
        return     parameter.getAnnotation( Body::class.java ) ?.let { ApiParam.Body }
                ?: parameter.getAnnotation( Field::class.java )?.let { ApiParam.Field( it.name ) }
                ?: parameter.getAnnotation( Path::class.java ) ?.let { ApiParam.Path( it.path ) }
                ?: parameter.getAnnotation( Query::class.java )?.let { ApiParam.Query( it.query ) }
    }

    /**
     * Check if all the precondition are satisfied, otherwise throw an Exception
     * @throws IllegalArgumentException
     */
    fun preconditions( caller: String, apiMethod: ApiMethod, bodyCount: Int, hasFields: Boolean ) {
        val method = apiMethod::class.simpleName
        val body = ApiParam.Body::class.simpleName
        val field = ApiParam.Field::class.simpleName

        if ( apiMethod is ApiMethod.POST || apiMethod is ApiMethod.PUT ) {
            if ( bodyCount == 0 && ! hasFields )
                throw IllegalStateException( "$caller: A $body OR at least a $field is required for a $method request" )

        } else if ( apiMethod !is ApiMethod.DELETE ) {
            if ( bodyCount != 0 || hasFields )
                throw IllegalStateException( "$caller: A $method cannot have a $body or a $field" )
        }

        if ( bodyCount > 1 ) throw IllegalStateException( "$caller: Define only one $body" )
        if ( bodyCount > 0 && hasFields )
            throw IllegalStateException( "$caller: Define only a $body or a set of ${field}s" )
    }


    /* GET THE REQUIRED SERIALIZER  */

    /** Get a [KSerializer] for the given [method] */
    fun serializerFrom( method: Method ): KSerializer<*>? {
        val typeName = method.genericReturnType.typeName
        return ENTITIES.find { typeName.contains( it.qualifiedName!! ) }?.serializer()
    }

    /** A [Array] containing all the [KClass]es in the 'entities' package */
    private val ENTITIES by lazy { getClasses() }

    /**
     * Scans all classes accessible from the context class loader which belong to the given package and subpackages.
     *
     * @return [List] of [KClass].
     */
    private fun getClasses(): List<KClass<*>> {
        val path = "studio/forface/ktmdb/entities"
        val packageName = "studio.forface.ktmdb.entities"

        val classLoader = Thread.currentThread().contextClassLoader
        val resources = classLoader.getResources(path)

        return resources.toList()
                .map { File( it.file ) }
                .flatMap { findClasses( it, packageName ) }
    }

    /**
     * Recursive method used to find all classes in a given directory and subdirs.
     *
     * @param directory   The base directory
     * @param packageName The package name for classes found inside the base directory
     * @return [List] of [KClass]
     */
    private fun findClasses( directory: File, packageName: String ): List<KClass<*>> {
        if ( ! directory.exists() ) return emptyList()

        return directory.listFiles().flatMap { file ->
            val fileName = file.name
            when {

                file.isDirectory -> {
                    assert( ! fileName.contains("." ) )
                    findClasses( file, "$packageName.$fileName" )
                }

                fileName.endsWith(".class" ) -> listOf(
                        Class.forName("$packageName.${ fileName.dropLast(6 ) }" ).kotlin
                )

                else -> emptyList()
            }
        }
    }
}