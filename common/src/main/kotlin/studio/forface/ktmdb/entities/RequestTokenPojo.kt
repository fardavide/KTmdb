package studio.forface.ktmdb.entities

import kotlinx.serialization.SerialName
import kotlinx.serialization.Serializable

/**
 * @author Davide Giuseppe Farella.
 * Inherit from [Pojo]
 */
@Serializable
data class RequestTokenPojo(

        @SerialName("request_token")
        val requestToken: String, // eyJhbGciOiJIfsISNiIaInR5cCI6IkpXVCJ9.eyJuYmYiOjE0NzIwNTQ1ODEsInZlcnNpb24iOjEsImV4zCI6MTQ3MjA1NTQ4MSwiYXXkIjoiM2Y4Nzg1N2JlMjA5ZDM1MTk4MzNiMzAwYTEzZDBlMqIiLCJzY29wZXMiOlsicGVuZGluZ19yZXF1ZXN0X3Rva2VuIl0sImp0aSI6Nd0.e0t83AUvwywXPBb-hSAY_J_y4TjcwA0w98GhCCQM1dA

        @SerialName("status_code")
        val statusCode: Int, // 1

        @SerialName("status_message")
        val statusMessage: String, // Success.

        @SerialName("success")
        val success: Boolean // true
): Pojo