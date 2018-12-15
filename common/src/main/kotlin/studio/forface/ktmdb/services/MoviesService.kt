package studio.forface.ktmdb.services

import kotlinx.coroutines.Deferred
import studio.forface.ktmdb.annotations.*
import studio.forface.ktmdb.entities.MoviePojo

/**
 * @author Davide Giuseppe Farella.
 */
@ApiService( ApiVersion.V3,"movie" )
interface MoviesService {

    companion object {
        private const val PATH_MOVIE_ID = "movieId"
        private const val QUERY_LANGUAGE = "language"
    }

    @GET( PATH_MOVIE_ID )
    fun testDetailsString(
            @Path( PATH_MOVIE_ID )  movieId: Int
    ): Deferred<String>

    /**
     * Get the primary information about a movie.
     * Supports `append_to_response`. Read more about this here:
     * @link https://developers.themoviedb.org/3/getting-started/append-to-response
     *
     * @link https://developers.themoviedb.org/3/movies/get-movie-details
     */
    @GET( PATH_MOVIE_ID )
    fun details(
            @Path( PATH_MOVIE_ID )      movieId: Int,
            @Query( QUERY_LANGUAGE )    language: String? = null
    ): Deferred<MoviePojo>

}