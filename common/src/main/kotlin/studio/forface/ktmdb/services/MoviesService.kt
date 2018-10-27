package studio.forface.ktmdb.services

import studio.forface.ktmdb.api.ApiVersion
import studio.forface.ktmdb.entities.Movie

/**
 * @author Davide Giuseppe Farella.
 */
interface MoviesService: _Service {

    override val endpoint: String get() = "movie"

    override val version: ApiVersion get() = ApiVersion.V3

    suspend fun testDetailsString( movieId: Int ): String

    suspend fun details( movieId: Int ): Movie

}