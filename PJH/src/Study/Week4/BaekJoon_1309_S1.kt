package Study.Week4

import java.util.*

private const val MOD = 9901
fun main() = with(Scanner(System.`in`)) {
    val rowCount = nextInt()

    val zooArr: IntArray = IntArray(rowCount + 1) {
        0
    }.apply {
        set(0, 1)
        set(1, 3)
    }

    for (i in 2..rowCount) {
        zooArr[i] = (zooArr[i-1]*2 + zooArr[i-2]) % MOD
    }

    print(zooArr[zooArr.lastIndex])
}