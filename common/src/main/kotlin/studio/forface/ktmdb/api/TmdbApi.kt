package studio.forface.ktmdb.api

import io.ktor.client.HttpClient
import studio.forface.ktmdb.servicebuilder.ServiceBuilder
import studio.forface.ktmdb.services.AuthV4Service
import studio.forface.ktmdb.services.MoviesService
import kotlin.properties.ReadOnlyProperty
import kotlin.reflect.KProperty

/**
 * @author Davide Giuseppe Farella.
 */
interface TmdbApi {

    companion object {
        /** The [String] base Url for the Api */
        const val BASE_URL = "https://api.themoviedb.org"
    }

    /** The [String] key for Api V3 */
    val apiKey: String

    /** The [String] read access token for Api V4 */
    val apiV4ReadAccessToken: String

    /** The [HttpClient] for CRUD operations */
    val client: HttpClient

    /** A boolean representing whether the logs should be enabled on the [client] */
    val logging: Boolean

    /** A [ServiceBuilder] for create the Services */
    val serviceBuilder: ServiceBuilder

    /** A service for *Auth* ( Api version. 4 ) endpoint */
    val authV4: AuthV4Service

    /** A Service for *Movies* endpoint */
    val movies: MoviesService
}

/** Create a Service by property delegation */
inline fun <reified S> TmdbApi.service() = object : ReadOnlyProperty<TmdbApi, S> {

    /** A lazy value for the Service [S] */
    val value: S by lazy { serviceBuilder.createService<S>(this@service ) }

    /**
     * @see ReadOnlyProperty.getValue
     * @return [value]
     */
    override fun getValue( thisRef: TmdbApi, property: KProperty<*> ): S = value
}

/**
 *  A function for invoke the constructor of [TmdbApiImpl]
 *  @return [TmdbApi]
 */
fun TmdbApi(
        apiKey: String,
        apiV4ReadAccessToken: String,
        client: HttpClient = HttpClient(),
        logging: Boolean = false,
        serviceBuilder: ServiceBuilder = ServiceBuilder
): TmdbApi = TmdbApiImpl(
        apiKey =                apiKey,
        apiV4ReadAccessToken =  apiV4ReadAccessToken,
        client =                client,
        logging =               logging,
        serviceBuilder =        serviceBuilder
)