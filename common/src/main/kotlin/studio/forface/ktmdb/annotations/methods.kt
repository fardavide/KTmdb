package studio.forface.ktmdb.annotations

import studio.forface.ktmdb.utils.EMPTY_STRING

/*
 * Author: Davide Giuseppe Farella.
 */

/**
 * An annotation for GET method.
 */
@Target(AnnotationTarget.FUNCTION)
@Retention(AnnotationRetention.RUNTIME)
annotation class GET( val s: String = EMPTY_STRING )

/**
 * An annotation for PUT method.
 */
@Target(AnnotationTarget.FUNCTION)
@Retention(AnnotationRetention.RUNTIME)
annotation class PUT( val s: String = EMPTY_STRING )


sealed class ApiMethod( val s: String ) {
    class GET( s: String ) : ApiMethod( s )
    class PUT( s: String ) : ApiMethod( s )
}