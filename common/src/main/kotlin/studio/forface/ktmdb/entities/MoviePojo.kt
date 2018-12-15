package studio.forface.ktmdb.entities

import kotlinx.serialization.*

/**
 * @author Davide Giuseppe Farella.
 * Inherit from [Pojo]
 */
@Serializable
data class MoviePojo(

        @SerialName("adult")
        val adult: Boolean, // false

        @SerialName("backdrop_path")
        val backdropPath: String?, // /fCayJrkfRaCRCTh8GqN30f8oyQF.jpg

        @SerialName("belongs_to_collection")
        val belongsToCollection: CollectionPojo?, // null

        @SerialName("budget")
        val budget: Int, // 63000000

        @SerialName("genres")
        val genres: List<GenrePojo>,

        @SerialName("homepage")
        val homepage: String?,

        @SerialName("id")
        val id: Int, // 550

        @SerialName("imdb_id")
        val imdbId: String?, // tt0137523

        @SerialName("original_language")
        val originalLanguage: String, // en

        @SerialName("original_title")
        val originalTitle: String, // Fight Club

        @SerialName("overview")
        val overview: String?, // A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy. Their concept catches on, with underground "fight clubs" forming in every town, until an eccentric gets in the way and ignites an out-of-control spiral toward oblivion.

        @SerialName("popularity")
        val popularity: Double, // 0.5

        @SerialName("poster_path")
        val posterPath: String?, // null

        @SerialName("production_companies")
        val productionCompanies: List<ProductionCompanyPojo>,

        @SerialName("production_countries")
        val productionCountries: List<ProductionCountryPojo>,

        @SerialName("release_date")
        val releaseDate: String, // 1999-10-12

        @SerialName("revenue")
        val revenue: Int, // 100853753

        @SerialName("runtime")
        val runtime: Int?, // 139

        @SerialName("spoken_languages")
        val spokenLanguages: List<SpokenLanguage>,

        @SerialName("status")
        val status: String, // Released

        @SerialName("tagline")
        val tagline: String?, // How much can you know about yourself if you've never been in a fight?

        @SerialName("title")
        val title: String, // Fight Club

        @SerialName("video")
        val video: Boolean, // false

        @SerialName("vote_average")
        val voteAverage: Double, // 7.8

        @SerialName("vote_count")
        val voteCount: Int // 3439
): Pojo