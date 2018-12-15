package studio.forface.ktmdb.annotations

/*  Author: Davide Giuseppe Farella  */

/** An annotation for Body param */
@Target(AnnotationTarget.VALUE_PARAMETER)
@Retention(AnnotationRetention.RUNTIME)
annotation class Body

/** An annotation for Path param */
@Target(AnnotationTarget.VALUE_PARAMETER)
@Retention(AnnotationRetention.RUNTIME)
annotation class Path( val path: String )

/** An annotation for Query param */
@Target(AnnotationTarget.VALUE_PARAMETER)
@Retention(AnnotationRetention.RUNTIME)
annotation class Query( val query: String )


sealed class ApiParams {
    object Body : ApiParams()
    class Path(  val s: String ): ApiParams()
    class Query( val s: String ): ApiParams()
}