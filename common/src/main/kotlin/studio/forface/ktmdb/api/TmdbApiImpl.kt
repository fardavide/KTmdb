package studio.forface.ktmdb.api

import io.ktor.client.HttpClient
import io.ktor.client.request.get
import kotlinx.serialization.json.JSON
import studio.forface.ktmdb.entities.Movie
import studio.forface.ktmdb.services.MoviesService

/**
 * @author Davide Giuseppe Farella.
 */
class TmdbApiImpl internal constructor( override val apiKey: String, override val logging: Boolean = false ): TmdbApi {

    private val client = HttpClient()

    override val movies: MoviesService by lazy {
        object : MoviesService {

            override suspend fun testDetailsString( movieId: Int ): String {
                val url = "${TmdbApi.BASE_URL}/$version/$endpoint/$movieId?api_key=$apiKey"
                if ( logging )
                    println( url )

                return client.get( url )
            }

            override suspend fun details( movieId: Int ): Movie {
                val url = "${TmdbApi.BASE_URL}/$version/$endpoint/$movieId?api_key=$apiKey"
                if ( logging )
                    println( url )

                val response = client.get<String>( url )
                return JSON.parse( response )
            }
        }
    }
}