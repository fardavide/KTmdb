package studio.forface.ktmdb.services

import io.ktor.client.response.HttpResponse
import kotlinx.coroutines.Deferred
import studio.forface.ktmdb.annotations.*
import studio.forface.ktmdb.entities.auth.AccessTokenPojo
import studio.forface.ktmdb.entities.auth.RequestTokenV4Pojo

/**
 * @author Davide Giuseppe Farella
 *
 * As previously mentioned in the getting started guide, we now do a better job of separating application and user
 * based authentication. Since the two systems are essentially the same and the only difference is the token you're
 * passing around, it should be a lot easier to understand how to use.
 * >    https://developers.themoviedb.org/4/getting-started/authorization
 *
 * #### Basic Workflow
 * * Generate a new request token
 * >    https://developers.themoviedb.org/4/auth/create-request-token
 * @see createRequestToken
 *
 * * Send the user to TMDb asking the user to approve the token
 *
 * * With an approved request token, generate a access token
 * >    https://developers.themoviedb.org/4/auth/create-access-token
 * @see createAccessToken
 *
 * #### Generating a request token
 * You can think of a request token as a temporary token that is waiting for the TMDb user to authorize on your behalf.
 * It serves no other purpose and cannot be used for authenticating requests. Unused request tokens will automatically
 * expire after 15 minutes.
 *
 * #### Asking for approval on TMDb
 * In order for a user to approve your request token, you'll want to direct the user to the website:
 * >    https://www.themoviedb.org/auth/access?request_token={request_token}
 * Along with this request, you're expected to send the request token as a query parameter.
 *
 * Once a user has approved your request, they'll either be directed to the /auth/access/approve page on TMDb or
 * redirected to the `redirect_to` path you specified when you made the request token. Remember, this can also be a local
 * callback on mobile iOS and Android.
 */
@ApiService( ApiVersion.V4,"auth" )
interface AuthV4Service {

    companion object {
        private const val PATH_ACCESS_TOKEN = "access_token"
        private const val PATH_REQUEST_TOKEN = "request_token"
    }

    /**
     * This method generates a new request token that you can ask a user to approve. This is the first step in getting
     * permission from a user to read and write data on their behalf. You can read more about this system here.
     * @link https://developers.themoviedb.org/4/auth/user-authorization-1
     *
     * Note that there is an optional body you can post alongside this request to set a redirect URL or callback that
     * will be executed once a request token has been approved on TMDb.
     *
     * @link https://developers.themoviedb.org/4/auth/create-request-token
     */
    @POST( PATH_REQUEST_TOKEN )
    fun createRequestToken( @Body redirectTo: String ) : Deferred<RequestTokenV4Pojo>

    /**
     * This method will finish the user authentication flow and issue an official user access token. The request token
     * in this request is sent along as part of the POST body. You should still use your standard API read access token
     * for authenticating this request.
     *
     * @link https://developers.themoviedb.org/4/auth/create-access-token
     */
    @POST( PATH_ACCESS_TOKEN )
    fun createAccessToken( @Body requestToken: String ) : Deferred<AccessTokenPojo>

    /**
     * This method gives your users the ability to log out of a session.
     *
     * @link https://developers.themoviedb.org/4/auth/delete-access-token
     */
    @DELETE( PATH_ACCESS_TOKEN )
    fun deleteAccessToken( @Body accessToken: String ) : Deferred<HttpResponse>
}