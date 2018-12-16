package studio.forface.ktmdb.entities.auth

import kotlinx.serialization.SerialName
import kotlinx.serialization.Serializable
import studio.forface.ktmdb.entities.Pojo

/**
 * @author Davide Giuseppe Farella.
 * Inherit from [Pojo]
 */
@Serializable
data class GuestSessionPojo(

        @SerialName("expires_at")
        val expiresAt: String, // 2016-08-27 16:26:40 UTC

        @SerialName("guest_session_id")
        val guestSessionId: String, // 1ce82ec1223641636ad4a60b07de3581

        @SerialName("success")
        val success: Boolean // true
) : Pojo