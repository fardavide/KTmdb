package studio.forface.ktmdb.entities.auth

import kotlinx.serialization.SerialName
import kotlinx.serialization.Serializable
import studio.forface.ktmdb.entities.Pojo

/**
 * @author Davide Giuseppe Farella.
 * Inherit from [Pojo]
 */
@Serializable
data class SessionPojo(

        @SerialName("session_id")
        val sessionId: String, // 79191836ddaa0da3df76a5ffef6f07ad6ab0c641

        @SerialName("success")
        val success: Boolean // true
) : Pojo