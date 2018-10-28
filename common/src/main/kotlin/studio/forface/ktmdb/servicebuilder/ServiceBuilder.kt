package studio.forface.ktmdb.servicebuilder

import studio.forface.ktmdb.api.TmdbApi

/**
 * @author Davide Giuseppe Farella.
 */
expect object ServiceBuilder {
    /**
     * A function for build a service for the given [S].
     *
     * @return an instance of [S]
     */
    inline fun <reified S> createService( tmdbApi: TmdbApi ) : S
}