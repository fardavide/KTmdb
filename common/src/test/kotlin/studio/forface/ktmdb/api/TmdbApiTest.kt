package studio.forface.ktmdb.api

import kotlin.test.Test
import studio.forface.ktmdb.runTest

/**
 * @author Davide Giuseppe Farella.
 * A test class for [TmdbApi]
 */
class TmdbApiTest {

    private val apiKey = "6328c07c1c982565d446d22aaa27a945" // TODO

    private val api = TmdbApi.createInstance( apiKey )

    @Test // TODO HTTP test only manually
    fun getMovie() = runTest {
        val movie = api.movies.details(551,"en-US" ).await()
        println( movie )
    }

    @Test // TODO HTTP test only manually
    fun debugMovieError() = runTest {
        val movie = api.movies.testDetailsString(550 ).await()
        val error = movie.substring( 80 )
        println( error )
    }
}