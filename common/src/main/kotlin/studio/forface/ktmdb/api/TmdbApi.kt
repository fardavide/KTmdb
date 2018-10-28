package studio.forface.ktmdb.api

import io.ktor.client.HttpClient
import studio.forface.ktmdb.services.MoviesService

/**
 * @author Davide Giuseppe Farella.
 */
interface TmdbApi {

    companion object {
        const val BASE_URL = "https://api.themoviedb.org"

        fun createInstance( apiKey: String, logging: Boolean = false ) = TmdbApiImpl( apiKey, logging )
    }

    val client: HttpClient

    val apiKey: String

    val logging: Boolean

    val movies: MoviesService
}