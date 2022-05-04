package Study.Week3

import java.util.*

fun main() = with(Scanner(System.`in`)) {
    val rowCount = nextInt()
    val intStack = Stack<Int>()
    var answer = 0
    for (i  in 0 until rowCount) {
        val rowInt = nextInt()
        if (rowInt == 0) {
            if (intStack.isNotEmpty()) {
                intStack.pop()
            }
        } else {
            intStack.push(rowInt)
        }
    }

    while (intStack.isNotEmpty()) {
        answer += intStack.pop()
    }
    print(answer)
}

