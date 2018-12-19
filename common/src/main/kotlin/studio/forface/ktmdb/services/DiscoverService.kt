package studio.forface.ktmdb.services

import kotlinx.coroutines.Deferred
import studio.forface.ktmdb.annotations.ApiService
import studio.forface.ktmdb.annotations.ApiVersion
import studio.forface.ktmdb.annotations.GET
import studio.forface.ktmdb.annotations.Query
import studio.forface.ktmdb.constants.QUERY.CERTIFICATION
import studio.forface.ktmdb.constants.QUERY.CERTIFICATION_COUNTRY
import studio.forface.ktmdb.constants.QUERY.CERTIFICATION_LTE
import studio.forface.ktmdb.constants.QUERY.INCLUDE_ADULT
import studio.forface.ktmdb.constants.QUERY.INCLUDE_VIDEO
import studio.forface.ktmdb.constants.QUERY.LANGUAGE
import studio.forface.ktmdb.constants.QUERY.PAGE
import studio.forface.ktmdb.constants.QUERY.PRIMARY_RELEASE_DATE_GTE
import studio.forface.ktmdb.constants.QUERY.PRIMARY_RELEASE_DATE_LTE
import studio.forface.ktmdb.constants.QUERY.PRIMARY_RELEASE_YEAR
import studio.forface.ktmdb.constants.QUERY.REGION
import studio.forface.ktmdb.constants.QUERY.RELEASE_DATE_GTE
import studio.forface.ktmdb.constants.QUERY.RELEASE_DATE_LTE
import studio.forface.ktmdb.constants.QUERY.SORT_BY
import studio.forface.ktmdb.entities.MovieResultPagePojo

/**
 * @author Davide Giuseppe Farella.
 */
@ApiService( ApiVersion.V4,"discover" )
interface DiscoverService {

    companion object {
        private const val PATH_MOVIE = "movie"
    }

    /**
     * Discover movies by different types of data like average rating, number of votes, genres and certifications. You
     * can get a valid list of certifications from the certifications list method.
     * @link https://developers.themoviedb.org/3/certifications/get-movie-certifications
     *
     * Discover also supports a nice list of sort options. See below for all of the available options.
     *
     * Please note, when using `certification` \ `certification.lte` you must also specify `certification_country`.
     * These two parameters work together in order to filter the results. You can only filter results with the countries
     * we have added to our certifications list.
     * @link https://developers.themoviedb.org/3/certifications/get-movie-certifications
     *
     * If you specify the `region` parameter, the regional release date will be used instead of the primary release
     * date.
     * The date returned will be the first date based on your query (ie. if a `with_release_type` is specified). It's
     * important to note the order of the release types that are used. Specifying "2|3" would return the limited
     * theatrical release date as opposed to "3|2" which would return the theatrical date.
     *
     * Also note that a number of filters support being comma (`,`) or pipe (`|`) separated. Comma's are treated like an
     * `AND` and query while pipe's are an `OR`.
     *
     * Some examples of what can be done with discover can be found here.
     * @link https://www.themoviedb.org/documentation/api/discover
     *
     * @link https://developers.themoviedb.org/3/discover/movie-discover
     */
    @GET( PATH_MOVIE ) fun movieDiscover(

            /**
             * Specify a language to query translatable fields with.
             * minLength: 2
             * pattern: ([a-z]{2})-([A-Z]{2})
             * default: en-US
             */
            @Query( LANGUAGE ) language: String? = null,

            /**
             * Specify a ISO 3166-1 code to filter release dates. Must be uppercase.
             * pattern: ^[A-Z]{2}$
             */
            @Query( REGION ) region: String? = null,

            /**
             * Choose from one of the many available sort options.
             *
             * Allowed Values: , popularity.asc, popularity.desc, release_date.asc, release_date.desc, revenue.asc,
             * revenue.desc, primary_release_date.asc, primary_release_date.desc, original_title.asc,
             * original_title.desc, vote_average.asc, vote_average.desc, vote_count.asc, vote_count.desc
             *
             * default: popularity.desc
             */
            @Query( SORT_BY ) sortBy: String? = null,

            /**
             * Used in conjunction with the certification filter, use this to specify a country with a valid
             * certification.
             */
            @Query( CERTIFICATION_COUNTRY ) certificationCountry: String? = null,

            /**
             * Filter results with a valid certification from the 'certification_country' field.
             */
            @Query( CERTIFICATION ) certification: String? = null,

            /**
             * Filter and only include movies that have a certification that is less than or equal to the specified
             * value.
             */
            @Query( CERTIFICATION_LTE ) certificationLte: String? = null,

            /** A filter to include or exclude adult movies */
            @Query( INCLUDE_ADULT ) includeAdult: Boolean? = null,

            /** A filter to include or exclude videos */
            @Query( INCLUDE_VIDEO ) includeVideo: Boolean? = null,

            /**
             * Specify the page of results to query.
             * minimum: 1
             * maximum: 1000
             * default: 1
             */
            @Query( PAGE ) page: Int? = null,

            /** A filter to limit the results to a specific primary release year */
            @Query( PRIMARY_RELEASE_YEAR ) primaryReleaseYear: Int? = null,

            /**
             * Filter for only include movies that have a primary release date that is greater or equal to the specified
             * value.
             * format: date
             */
            @Query( PRIMARY_RELEASE_DATE_GTE ) primaryReleaseDateGte: String? = null,

            /**
             * Filter for only include movies that have a primary release date that is less than or equal to the
             * specified value.
             * format: date
             */
            @Query( PRIMARY_RELEASE_DATE_LTE ) primaryReleaseDateLte: String? = null,

            /**
             * Filter for only include movies that have a release date (looking at all release dates) that is greater or
             * equal to the specified value.
             * format: date
             */
            @Query( RELEASE_DATE_GTE ) releaseDateGte: String? = null,

            /**
             * Filter for only include movies that have a release date (looking at all release dates) that is less than
             * or equal to the specified value.
             * format: date
             */
            @Query( RELEASE_DATE_LTE ) releaseDateLte: String? = null

    ) : Deferred<MovieResultPagePojo>
}


























































