package studio.forface.ktmdb.entities

import kotlinx.serialization.SerialName
import kotlinx.serialization.Serializable

/**
 * @author Davide Giuseppe Farella.
 * Inherit from [Pojo]
 */
@Serializable
data class MovieResultPagePojo(

        @SerialName("page")
        val page: Int, // 1

        @SerialName("results")
        val results: List<MovieResultPojo>,

        @SerialName("total_pages")
        val totalPages: Int, // 4

        @SerialName("total_results")
        val totalResults: Int // 61
) : Pojo

/**
 * @author Davide Giuseppe Farella.
 * Inherit from [Pojo]
 */
@Serializable
data class MovieResultPojo(

        @SerialName("adult")
        val adult: Boolean, // false

        @SerialName("backdrop_path")
        val backdropPath: String?, // null

        @SerialName("genre_ids")
        val genreIds: List<Int>,

        @SerialName("id")
        val id: Int, // 164558

        @SerialName("original_language")
        val originalLanguage: String, // en

        @SerialName("original_title")
        val originalTitle: String, // One Direction: This Is Us

        @SerialName("overview")
        val overview: String, // Go behind the scenes during One Directions sell out "Take Me Home" tour and experience life on the road.

        @SerialName("popularity")
        val popularity: Double, // 1.166982

        @SerialName("poster_path")
        val posterPath: String?, // null

        @SerialName("release_date")
        val releaseDate: String, // 2013-08-30

        @SerialName("title")
        val title: String, // One Direction: This Is Us

        @SerialName("video")
        val video: Boolean, // false

        @SerialName("vote_average")
        val voteAverage: Double, // 8.45

        @SerialName("vote_count")
        val voteCount: Int // 55
) : Pojo