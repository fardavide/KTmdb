package studio.forface.ktmdb.api

/**
 * @author Davide Giuseppe Farella.
 */
enum class ApiVersion( private val path: String ) {
    V3("3" ),
    V4("4" );

    override fun toString(): String = path
}

