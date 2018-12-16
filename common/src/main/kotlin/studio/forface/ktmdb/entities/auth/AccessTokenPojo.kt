package studio.forface.ktmdb.entities.auth

import kotlinx.serialization.SerialName
import kotlinx.serialization.Serializable
import studio.forface.ktmdb.entities.Pojo

/**
 * @author Davide Giuseppe Farella.
 * Inherit from [Pojo]
 */
@Serializable
data class AccessTokenPojo(

        @SerialName("access_token")
        val accessToken: String, // eyJhbGciOiJIUzI1NiIsInR5cCIdIkpXVCJ9.eyJuYmYiOjE0ODM1NzM4MzUsInZlcnNpb24iOjEsInN1YiI6IjRiYzg4OTJhMDE3YTNjMGY5MjAwMDAwMiIsImF1ZCI6IlNmODc4NTdiZTIwOWQzNTE5ODMzYjMwMGExM2QwZTEyIiwic2NvcGVzIjpbImFwaV9yZWFkIiwiYXBpX3dyaXRlIl0sImp0aSI6Ijg4In0.b76OiEs10gdp9oNOoGpBJ94nO9Zi17Y7SvAXJQW8nH2

        @SerialName("account_id")
        val accountId: String, // 4bc8892a017a3c0z92001001

        @SerialName("status_code")
        val statusCode: Int, // 1

        @SerialName("status_message")
        val statusMessage: String, // Success.

        @SerialName("success")
        val success: Boolean // true
): Pojo