package studio.forface.ktmdb.services

import studio.forface.ktmdb.api.ApiVersion

/**
 * @author Davide Giuseppe Farella.
 */
@Suppress("ClassName")
interface _Service {

    val endpoint: String

    val version: ApiVersion
}