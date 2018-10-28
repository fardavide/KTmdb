package studio.forface.ktmdb.annotations

/*
 * Author: Davide Giuseppe Farella.
 */

/**
 * An annotation for Path param.
 */
@Target(AnnotationTarget.VALUE_PARAMETER)
@Retention(AnnotationRetention.RUNTIME)
annotation class Path( val path: String )

/**
 * An annotation for Query param.
 */
@Target(AnnotationTarget.VALUE_PARAMETER)
@Retention(AnnotationRetention.RUNTIME)
annotation class Query( val query: String )


sealed class ApiParams ( val s: String ) {
    class Path( s: String ): ApiParams( s )
    class Query( s: String ): ApiParams( s )
}