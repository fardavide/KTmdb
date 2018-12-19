package studio.forface.ktmdb.services

import io.ktor.client.response.HttpResponse
import kotlinx.coroutines.Deferred
import studio.forface.ktmdb.annotations.*
import studio.forface.ktmdb.entities.auth.GuestSessionPojo
import studio.forface.ktmdb.entities.auth.RequestTokenV3Pojo
import studio.forface.ktmdb.entities.auth.SessionPojo

/**
 * @author Davide Giuseppe Farella
 *
 * As outlined in the getting started guide, the basics to getting a user authenticated look like this:
 * * Create a new request token
 * @link https://developers.themoviedb.org/3/authentication/create-request-token
 *
 * * Get the user to authorize the request token
 *
 * * Create a new session id with the authorized request token
 * @link https://developers.themoviedb.org/3/authentication/create-session
 *
 * Part 1 and 3 should be fairly easy to understand but I'll walk through each step to make sure it's clear.
 *
 * #### Step 1: Create a request token
 * The first step as a developer is to request a new token.
 * @link https://developers.themoviedb.org/3/authentication/create-request-token
 * @see createRequestToken
 * This is a temporary token that is required to ask the user
 * for permission to access their account. This token will auto expire after 60 minutes if it's not used.
 *
 * #### Step 2: Ask the user for permission
 * With a request token in hand, forward your user to the following URL:
 * >    https://www.themoviedb.org/authenticate/{REQUEST_TOKEN}
 * You can also pass this URL a redirect_to parameter, ie:
 * >    https://www.themoviedb.org/authenticate/{REQUEST_TOKEN}?redirect_to=http://www.yourapp.com/approved
 * Once the user has approved your request token, they will either be redirected to the URL you specified in the
 * `redirect_to` parameter or to the `/authenticate/allow` path on TMDb. If they aren't redirected to a custom URL, the
 * page will also have a `Authentication-Callback` header. This header contains the API call for step #3. You can either
 * manually generate it or simply use the one we return.
 *
 * #### Step 3: Create a session ID
 * By calling the new session method with the request token that has been approved by the user in step 2, we will
 * return a new `session_id`.
 * @link https://developers.themoviedb.org/3/authentication/create-session
 * @see createSession
 * @see createSessionWithLogin
 * This is the session that can now be used to write user data. You should treat this key like
 * a password and keep it secret.
 *
 * #### Guest Sessions
 * A guest session can be used to rate movies without having a registered TMDb user account. For more information about
 * how to create a guest session see here.
 * @link https://developers.themoviedb.org/3/authentication/create-guest-session
 * @see createGuestSession
 */
@ApiService( ApiVersion.V3,"authentication" )
interface AuthV3Service {

    companion object {
        private const val PATH_GUEST_SESSION = "guest_session"
        private const val PATH_SESSION = "session"
        private const val PATH_TOKEN = "token"
    }

    /**
     * This method will let you create a new guest session. Guest sessions are a type of session that will let a user
     * rate movies and TV shows but not require them to have a TMDb user account. More information about user
     * authentication can be found here.
     * @link https://developers.themoviedb.org/3/authentication/how-do-i-generate-a-session-id
     *
     * Please note, you should only generate a single guest session per user (or device) as you will be able to attach
     * the ratings to a TMDb user account in the future. There is also IP limits in place so you should always make
     * sure it's the end user doing the guest session actions.
     *
     * If a guest session is not used for the first time within 24 hours, it will be automatically deleted.
     *
     * @link https://developers.themoviedb.org/3/authentication/create-guest-session
     */
    @GET("$PATH_GUEST_SESSION/new" )
    fun createGuestSession() : Deferred<GuestSessionPojo>

    /**
     * Create a temporary request token that can be used to validate a TMDb user login. More details about how this
     * works can be found here.
     * @link https://developers.themoviedb.org/3/authentication/how-do-i-generate-a-session-id
     *
     * @link https://developers.themoviedb.org/3/authentication/create-request-token
     */
    @GET("$PATH_TOKEN/new" )
    fun createRequestToken() : Deferred<RequestTokenV3Pojo>

    /**
     * You can use this method to create a fully valid session ID once a user has validated the request token. More
     * information about how this works can be found here.
     * @link https://developers.themoviedb.org/3/authentication/how-do-i-generate-a-session-id
     *
     * @link https://developers.themoviedb.org/3/authentication/create-session
     */
    @POST("$PATH_SESSION/new" )
    fun createSession( @Body requestToken: String ) : Deferred<SessionPojo>

    /**
     * This method allows an application to validate a request token by entering a username and password.
     * Not all applications have access to a web view so this can be used as a substitute.
     *
     * Please note, the preferred method of validating a request token is to have a user authenticate the request via
     * the TMDb website. You can read about that method here.
     * @link https://developers.themoviedb.org/3/authentication/how-do-i-generate-a-session-id
     *
     * If you decide to use this method please use HTTPS.
     *
     * @link https://developers.themoviedb.org/3/authentication/validate-request-token
     */
    @Deprecated("Method not secure", ReplaceWith("AuthV3Service.createSession" ) )
    @POST("$PATH_TOKEN/validate_with_login" )
    fun createSessionWithLogin() : Deferred<RequestTokenV3Pojo>

    /**
     * Use this method to create a v3 session ID if you already have a valid v4 access token. The v4 token needs to be
     * authenticated by the user. Your standard "read token" will not validate to create a session ID.
     * @see AuthV4Service.createAccessToken
     *
     * @link https://developers.themoviedb.org/3/authentication/create-session-from-v4-access-token
     */
    @POST("$PATH_SESSION/convert/4" )
    fun createSessionWithV4Token( @Body accessToken: String ) : Deferred<SessionPojo>

    /**
     * If you would like to delete (or "logout") from a session, call this method with a valid session ID.
     *
     * @link https://developers.themoviedb.org/3/authentication/delete-session
     */
    @DELETE( PATH_SESSION )
    fun deleteSession( @Body accessToken: String ) : Deferred<HttpResponse>
}