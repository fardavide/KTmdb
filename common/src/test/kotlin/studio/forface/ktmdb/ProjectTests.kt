package studio.forface.ktmdb

import kotlinx.serialization.SerialName
import kotlinx.serialization.Serializable
import kotlinx.serialization.json.JSON
import studio.forface.ktmdb.entities.GenrePojo
import kotlin.test.Test
import kotlin.test.assertEquals

/**
 * @author Davide Giuseppe Farella.
 *
 * A common Test class for the whole Project.
 * We use this for run some basic tests.
 */
class ProjectTests {

    private val genre = GenrePojo(0, "horror" )

    @Test
    fun testingMultiplatformCode_runsCorrectly() {
        assertEquals("horror", genre.name )
    }

    @Test
    fun testingMultiplatformCode_canSerialize() {
        val s = JSON.stringify( ASimpleClass(1 ) )
        println( s )
    }
}

@Serializable
data class ASimpleClass( @SerialName( "a" ) val a: Int )