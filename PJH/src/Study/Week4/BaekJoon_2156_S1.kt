package Study.Week4

import java.util.*
import kotlin.math.max

fun main() = with(Scanner(System.`in`)) {
    val wineCount = nextInt()
    val wineArr = IntArray(wineCount) {
        0
    }
    for (i in 0 until wineCount) {
        val wine = nextInt()
        wineArr[i] = wine
    }
    val dpArr = IntArray(wineCount) {
        0
    }.apply {
        set(0, wineArr[0])
    }

    for (i in 1 until wineCount) {
        when(i) {
            1 -> {
                dpArr[i] = wineArr[i] + wineArr[i - 1]
            }
            2 -> {
                dpArr[i] = max(dpArr[i-1], max(wineArr[i-2] + wineArr[i], wineArr[i-1] + wineArr[i]))
            }
            else -> {
                dpArr[i] = max(dpArr[i-1], max(dpArr[i-2] + wineArr[i], dpArr[i-3] + wineArr[i-1] + wineArr[i]))
            }
        }
    }
    print(dpArr[dpArr.lastIndex])
}