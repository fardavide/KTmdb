package studio.forface.ktmdb.services

import kotlinx.coroutines.Deferred
import studio.forface.ktmdb.annotations.*
import studio.forface.ktmdb.constants.QUERY.LANGUAGE
import studio.forface.ktmdb.constants.QUERY.APPEND_TO_RESPONSE
import studio.forface.ktmdb.entities.MoviePojo

/**
 * @author Davide Giuseppe Farella.
 */
@ApiService( ApiVersion.V3,"movie" )
interface MoviesService {

    companion object {
        private const val PATH_MOVIE_ID = "movieId"
    }

    @GET( PATH_MOVIE_ID ) fun testDetailsString( @Path( PATH_MOVIE_ID )  movieId: Int ): Deferred<String>

    /**
     * Get the primary information about a movie.
     * Supports `append_to_response`. Read more about this here:
     * @link https://developers.themoviedb.org/3/getting-started/append-to-response
     *
     * @link https://developers.themoviedb.org/3/movies/get-movie-details
     */
    @GET( PATH_MOVIE_ID ) fun details(

            @Path( PATH_MOVIE_ID ) movieId: Int,

            /**
             * Pass a ISO 639-1 value to display translated data for the fields that support it.
             * minLength: 2
             * pattern: ([a-z]{2})-([A-Z]{2})
             * default: en-US
             */
            @Query( LANGUAGE ) language: String? = null,

            /**
             * Append requests within the same namespace to the response.
             * pattern: ([\w]+)
             */
            @Query( APPEND_TO_RESPONSE) appendToResponse: String? = null

    ): Deferred<MoviePojo>

}