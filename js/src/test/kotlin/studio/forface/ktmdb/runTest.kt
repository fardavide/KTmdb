package studio.forface.ktmdb

/**
 * @author Davide Giuseppe Farella.
 *
 * @see runTest
 */
actual fun <T> runTest( block: suspend () -> T ): dynamic =
        TODO( "promise { block() }" )