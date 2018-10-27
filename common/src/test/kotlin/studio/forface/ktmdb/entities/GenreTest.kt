package studio.forface.ktmdb.entities

import kotlinx.serialization.json.JSON
import kotlin.test.Test
import kotlin.test.assertEquals

/**
 * @author Davide Giuseppe Farella.
 *
 * A Test class for [Genre].
 */
class GenreTest {

    private val genre = Genre(0, "horror" )

    @Test
    fun testingMultiplatformCode_runsCorrectly() {
        assertEquals("horror", genre.name )
    }

    @Test
    fun canSerialize() {
        JSON.stringify( genre )
    }
}
