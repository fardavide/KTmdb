package studio.forface.ktmdb.entities

import kotlinx.serialization.SerialName
import kotlinx.serialization.Serializable

/**
 * @author Davide Giuseppe Farella.
 * Inherit from [Pojo]
 */
@Serializable
data class GenrePojo(

    @SerialName("id")
    val id: Int, // 18

    @SerialName("name")
    val name: String // Drama
): Pojo