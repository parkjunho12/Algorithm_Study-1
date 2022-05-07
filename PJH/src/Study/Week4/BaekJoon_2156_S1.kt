package Study.Week4

import java.util.*

fun main() = with(Scanner(System.`in`)) {
    val rowCount = nextInt()

    val zooArr: Array<IntArray> = Array<IntArray>(2) {
        IntArray(rowCount) {
            0
        }
    }

    zooArr.forEach {
        it.forEach {
            print ("$it ")
        }
        println()
    }


}