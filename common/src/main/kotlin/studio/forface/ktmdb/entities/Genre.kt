package studio.forface.ktmdb.entities

import kotlinx.serialization.SerialName
import kotlinx.serialization.Serializable

/**
 * @author Davide Giuseppe Farella.
 */
@Serializable
data class Genre(

    @SerialName("id")
    val id: Int, // 18

    @SerialName("name")
    val name: String // Drama
)