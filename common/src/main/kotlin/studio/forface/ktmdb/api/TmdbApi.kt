package studio.forface.ktmdb.api

import studio.forface.ktmdb.services.MoviesService

/**
 * @author Davide Giuseppe Farella.
 */
interface TmdbApi {

    companion object {
        const val BASE_URL = "https://api.themoviedb.org"

        fun createInstance( apiKey: String) = TmdbApiImpl( apiKey,true )
    }

    val apiKey: String

    val logging: Boolean

    val movies: MoviesService
}