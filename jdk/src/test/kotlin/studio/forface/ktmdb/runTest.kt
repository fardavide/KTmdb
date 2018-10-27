package studio.forface.ktmdb

import kotlinx.coroutines.runBlocking

/**
 * @author Davide Giuseppe Farella.
 *
 * @see runTest
 */
actual fun <T> runTest( block: suspend () -> T ) {
    runBlocking { block() }
}