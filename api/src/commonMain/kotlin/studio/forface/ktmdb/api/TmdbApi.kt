package studio.forface.ktmdb.api

import studio.forface.ktmdb.services.MoviesService

/**
 * @author Davide Giuseppe Farella.
 */
interface TmdbApi {

    companion object {
        fun createInstance( baseUrl: String, apiKey: String ) = TmdbApiImpl( baseUrl, apiKey )
    }

    val baseUrl: String

    val apiKey: String

    val movies: MoviesService
}