package studio.forface.ktmdb.api

import io.ktor.client.HttpClient
import io.ktor.client.request.get
import kotlinx.serialization.json.JSON
import studio.forface.ktmdb.entities.Movie
import studio.forface.ktmdb.services.MoviesService

/**
 * @author Davide Giuseppe Farella.
 */
class TmdbApiImpl internal constructor( override val baseUrl: String, override val apiKey: String ): TmdbApi {

    private val client = HttpClient()

    override val movies: MoviesService by lazy {
        object : MoviesService {

            override suspend fun details( movieId: Int ): Movie {
                val response = client.get<String>("$baseUrl/3/movie/$movieId?api_key=$apiKey" )
                return JSON.parse( response )
            }

            override suspend fun testDetailsString( movieId: Int ) =
                    client.get<String>("$baseUrl/3/movie/$movieId?api_key=$apiKey" )
        }
    }
}