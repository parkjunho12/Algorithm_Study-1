package Study.Week4

import java.util.*

fun main() = with(Scanner(System.`in`)) {
    val N = nextInt()
    val M = nextInt()
    val numArr: Array<IntArray> = Array<IntArray>(N) {
        IntArray(M) {
            0
        }
    }


    for (i in 0 until N) {
        val row = nextInt().toString()
        for (j in row.indices) {
            numArr[i][j] = row[j].toString().toInt()
        }
    }


}