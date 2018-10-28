package studio.forface.ktmdb.api

import io.ktor.client.HttpClient
import io.ktor.client.request.get
import kotlinx.serialization.json.JSON
import studio.forface.ktmdb.entities.Movie
import studio.forface.ktmdb.servicebuilder.ServiceBuilder
import studio.forface.ktmdb.services.MoviesService

/**
 * @author Davide Giuseppe Farella.
 */
class TmdbApiImpl internal constructor( override val apiKey: String, override val logging: Boolean ): TmdbApi {

    override val client = HttpClient()

    override val movies: MoviesService by lazy {
        ServiceBuilder.createService<MoviesService>(this )
    }
}