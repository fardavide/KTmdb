package studio.forface.ktmdb.services

import kotlinx.coroutines.Deferred
import studio.forface.ktmdb.annotations.*
import studio.forface.ktmdb.entities.Movie
import studio.forface.ktmdb.utils.EMPTY_STRING

/**
 * @author Davide Giuseppe Farella.
 */
@ApiService( ApiVersion.V3,"movie" )
interface MoviesService {

    companion object {
        private const val PATH_MOVIE_ID = "movieId"
        private const val QUERY_LANGUAGE = "language"
    }

    @GET(PATH_MOVIE_ID)
    fun testDetailsString(
            @Path(PATH_MOVIE_ID) movieId: Int
    ): Deferred<String>

    @GET(PATH_MOVIE_ID)
    fun details(
            @Path(PATH_MOVIE_ID)    movieId: Int,
            @Query(QUERY_LANGUAGE)  language: String? = null
    ): Deferred<Movie>

}