package studio.forface.ktmdb.services

import studio.forface.ktmdb.entities.Movie

/**
 * @author Davide Giuseppe Farella.
 */
interface MoviesService {

    suspend fun details( movieId: Int ): Movie

}