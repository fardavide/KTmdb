package studio.forface.ktmdb.api

import kotlin.test.Test
import studio.forface.ktmdb.runTest

/**
 * @author Davide Giuseppe Farella.
 * A test class for [TmdbApi]
 */
class TmdbApiTest {


    private val api = TmdbApi( apiKey, apiV4ReadAccessToken, logging = true )
    private val testingMovieId = 551

    @Test // TODO HTTP test only manually
    fun getMovie() = runTest {
        val movie = api.movies.details( testingMovieId,"en-US" ).await()
        println( movie )
    }

    @Test // TODO HTTP test only manually
    fun debugMovieError() = runTest {
        val movie = api.movies.testDetailsString( testingMovieId ).await()
        val error = movie.substring( 346 )
        println( error )
    }

    @Test // TODO HTTP test only manually
    fun createRequestToken() = runTest {
        val response = api.authV4.createRequestToken("" ).await()
        println( response )
    }
}