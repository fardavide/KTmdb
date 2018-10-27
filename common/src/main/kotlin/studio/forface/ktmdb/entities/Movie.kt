package studio.forface.ktmdb.entities

import kotlinx.serialization.SerialName
import kotlinx.serialization.Serializable
import kotlinx.serialization.Optional

/**
 * @author Davide Giuseppe Farella.
 */
@Serializable
data class Movie(

    @Optional
    @SerialName("adult")
    val adult: Boolean, // false

    @Optional
    @SerialName("backdrop_path")
    val backdropPath: String, // /fCayJrkfRaCRCTh8GqN30f8oyQF.jpg

    @Optional
    @SerialName("belongs_to_collection")
    val belongsToCollection: Any?, // null

    @Optional
    @SerialName("budget")
    val budget: Int, // 63000000

    @Optional
    @SerialName("genres")
    val genres: List<Genre>,

    @Optional
    @SerialName("homepage")
    val homepage: String,

    @Optional
    @SerialName("id")
    val id: Int, // 550

    @Optional
    @SerialName("imdb_id")
    val imdbId: String, // tt0137523

    @Optional
    @SerialName("original_language")
    val originalLanguage: String, // en

    @Optional
    @SerialName("original_title")
    val originalTitle: String, // Fight Club

    @Optional
    @SerialName("overview")
    val overview: String, // A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy. Their concept catches on, with underground "fight clubs" forming in every town, until an eccentric gets in the way and ignites an out-of-control spiral toward oblivion.

    @Optional
    @SerialName("popularity")
    val popularity: Double, // 0.5

    @Optional
    @SerialName("poster_path")
    val posterPath: Any?, // null

    @Optional
    @SerialName("production_companies")
    val productionCompanies: List<ProductionCompany>,

    @Optional
    @SerialName("production_countries")
    val productionCountries: List<ProductionCountry>,

    @Optional
    @SerialName("release_date")
    val releaseDate: String, // 1999-10-12

    @Optional
    @SerialName("revenue")
    val revenue: Int, // 100853753

    @Optional
    @SerialName("runtime")
    val runtime: Int, // 139

    @Optional
    @SerialName("spoken_languages")
    val spokenLanguages: List<SpokenLanguage>,

    @Optional
    @SerialName("status")
    val status: String, // Released

    @Optional
    @SerialName("tagline")
    val tagline: String, // How much can you know about yourself if you've never been in a fight?

    @Optional
    @SerialName("title")
    val title: String, // Fight Club

    @Optional
    @SerialName("video")
    val video: Boolean, // false

    @Optional
    @SerialName("vote_average")
    val voteAverage: Double, // 7.8

    @Optional
    @SerialName("vote_count")
    val voteCount: Int // 3439
)