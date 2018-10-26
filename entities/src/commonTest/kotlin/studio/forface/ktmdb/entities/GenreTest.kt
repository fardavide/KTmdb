package studio.forface.ktmdb.entities

import kotlin.test.Test
import kotlin.test.assertEquals

/**
 * @author Davide Giuseppe Farella.
 *
 * A Test class for [Genre].
 */
class GenreTest {

    @Test
    fun testingMultiplatformCode_runsCorrectly() {
        val genre = Genre(0, "horror" )

        assertEquals("horror", genre.name )
    }
}
