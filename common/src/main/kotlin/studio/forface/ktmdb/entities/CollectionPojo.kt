package studio.forface.ktmdb.entities

import kotlinx.serialization.SerialName
import kotlinx.serialization.Serializable

/**
 * @author Davide Giuseppe Farella.
 * Inherit from [Pojo]
 */
@Serializable
data class CollectionPojo(

    @SerialName("backdrop_path")
    val backdropPath: String, // /kE3SAAQfWVkjJUZy1ohha8hy3LH.jpg

    @SerialName("id")
    val id: Int, // 372257

    @SerialName("name")
    val name: String, // The Poseidon Adventure Collection

    @SerialName("poster_path")
    val posterPath: String // /ngvcBGzUbPsUGaSSLOaVNG2lfLW.jpg
): Pojo