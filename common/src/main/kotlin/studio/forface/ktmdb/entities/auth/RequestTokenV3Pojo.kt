package studio.forface.ktmdb.entities.auth

import kotlinx.serialization.SerialName
import kotlinx.serialization.Serializable
import studio.forface.ktmdb.entities.Pojo

/**
 * @author Davide Giuseppe Farella.
 * Inherit from [Pojo]
 */
@Serializable
data class RequestTokenV3Pojo(

        @SerialName("expires_at")
        val expiresAt: String, // 2016-08-26 17:04:39 UTC

        @SerialName("request_token")
        val requestToken: String, // ff5c7eeb5a8870efe3cd7fc5c282cffd26800ecd

        @SerialName("success")
        val success: Boolean // true
) : Pojo