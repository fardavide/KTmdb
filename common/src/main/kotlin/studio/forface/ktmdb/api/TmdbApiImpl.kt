package studio.forface.ktmdb.api

import io.ktor.client.HttpClient
import studio.forface.ktmdb.servicebuilder.ServiceBuilder
import studio.forface.ktmdb.services.AuthV4Service
import studio.forface.ktmdb.services.MoviesService

/**
 * @author Davide Giuseppe Farella.
 * Implementation of [TmdbApi]
 *
 * @property apiKey [TmdbApi.apiKey]
 * @property apiV4ReadAccessToken [TmdbApi.apiV4ReadAccessToken]
 * @property client [TmdbApi.client]
 * @property logging [TmdbApi.logging]
 * @property serviceBuilder [TmdbApi.serviceBuilder]
 */
class TmdbApiImpl internal constructor(
        override val apiKey: String,
        override val apiV4ReadAccessToken: String,
        override val client: HttpClient,
        override val logging: Boolean,
        override val serviceBuilder: ServiceBuilder
): TmdbApi {

    /** @see TmdbApi.authV4 */
    override val authV4 by service<AuthV4Service>()

    /** @see TmdbApi.movies */
    override val movies by service<MoviesService>()
}