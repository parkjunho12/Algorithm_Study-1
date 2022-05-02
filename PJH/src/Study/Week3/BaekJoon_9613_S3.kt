package Study.Week3

import java.util.*

fun main() = with(Scanner(System.`in`)) {
    val testCaseCount = readLine()!!.toInt()

    for (k in 0 until testCaseCount) {
        val testCase = readLine()!!
        val testCasesIntArr = testCase.split(" ")
        val aInt = testCasesIntArr[0].toInt()
        var answer = 0
        var numCount = aInt
        for (i in 0 until numCount) {
            for (j in i+1 until numCount) {
                answer += gcd(testCasesIntArr[i+1].toInt(), testCasesIntArr[j+1].toInt())
            }
        }

        println(answer)
    }
}

private fun gcd(a: Int, b: Int): Int {
    if(b == 0) {
        return a
    } else {
        return gcd(b, a%b)
    }
}