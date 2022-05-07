package Study.Week4

import java.util.*

var answer = 0
fun main() = with(Scanner(System.`in`)) {
    val rowCount = nextInt()

    val zooArr: Array<IntArray> = Array<IntArray>(rowCount) {
        IntArray(2) {
            0
        }
    }

    zooArr.forEach {
        it.forEach {
            print ("$it ")
        }
        println()
    }


    println(answer)
}