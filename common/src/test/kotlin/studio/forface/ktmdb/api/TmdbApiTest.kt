package studio.forface.ktmdb.api

import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.launch
import kotlin.test.Test
import studio.forface.ktmdb.api.TmdbApi
import studio.forface.ktmdb.runTest

/**
 * @author Davide Giuseppe Farella.
 * A test class for [TmdbApi]
 */
class TmdbApiTest {

    private val baseUrl = "https://api.themoviedb.org/"
    private val apiKey = "" // TODO

    private val api = TmdbApi.createInstance( baseUrl, apiKey )

    @Test // TODO HTTP test only manually
    fun getMovie() = runTest {
        val movie = api.movies.testDetailsString(550 )
        println( movie )
    }
}