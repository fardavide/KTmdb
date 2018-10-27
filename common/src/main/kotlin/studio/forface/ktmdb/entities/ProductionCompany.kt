package studio.forface.ktmdb.entities

import kotlinx.serialization.SerialName
import kotlinx.serialization.Serializable
import kotlinx.serialization.Optional

/**
 * @author Davide Giuseppe Farella.
 */
@Serializable
data class ProductionCompany(

    @SerialName("id")
    val id: Int, // 25

    @SerialName("logo_path")
    val logoPath: String, // /qZCc1lty5FzX30aOCVRBLzaVmcp.png

    @SerialName("name")
    val name: String, // 20th Century Fox

    @SerialName("origin_country")
    val originCountry: String // US
)