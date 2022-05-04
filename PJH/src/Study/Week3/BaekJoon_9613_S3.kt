package Study.Week3

import java.util.*

fun main() = with(Scanner(System.`in`)) {
    val testCaseCount = nextInt()

    for (k in 0 until testCaseCount) {
        val testCase = nextInt()
        val testCasesIntArr = IntArray(testCase) {
            0
        }
        for (i in 0 until testCase) {
            testCasesIntArr[i] = nextInt()
        }
        var answer: Long = 0L
        for (i in 0 until testCase - 1) {
            for (j in i + 1 until testCase) {
                val testI = testCasesIntArr[i]
                val testJ = testCasesIntArr[j]
                answer += if  (testI > testJ) {
                    gcd(testI, testJ).toLong()
                } else {
                    gcd(testJ, testI).toLong()
                }
            }
        }
        println(answer)
    }
}

private fun gcd(a: Int, b: Int): Int {
    return if(b == 0) {
        a
    } else {
        gcd(b, a%b)
    }
}