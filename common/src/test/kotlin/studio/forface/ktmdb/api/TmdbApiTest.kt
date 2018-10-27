package studio.forface.ktmdb.api

import kotlin.test.Test
import studio.forface.ktmdb.runTest

/**
 * @author Davide Giuseppe Farella.
 * A test class for [TmdbApi]
 */
class TmdbApiTest {

    private val apiKey = "" // TODO

    private val api = TmdbApi.createInstance( apiKey )

    @Test // TODO HTTP test only manually
    fun getMovie() = runTest {
        val movie = api.movies.details(550 )
        println( movie )
    }

    @Test // TODO HTTP test only manually
    fun debugMovieError() = runTest {
        val movie = api.movies.testDetailsString(550 )
        val error = movie.substring( 925 )
        println( error )
    }
}