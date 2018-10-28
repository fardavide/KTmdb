package studio.forface.ktmdb.api

import kotlin.test.Test
import studio.forface.ktmdb.runTest

/**
 * @author Davide Giuseppe Farella.
 * A test class for [TmdbApi]
 */
class TmdbApiTest {

    private val apiKey = "" // TODO

    private val api = TmdbApi.createInstance( apiKey,true )
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
}