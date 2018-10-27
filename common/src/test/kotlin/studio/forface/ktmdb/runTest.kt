package studio.forface.ktmdb

/**
 * @author Davide Giuseppe Farella.
 *
 * A function for run a blocking-test.
 */
expect fun <T> runTest( block: suspend () -> T )