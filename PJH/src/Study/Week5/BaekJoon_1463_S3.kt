import java.util.*

fun main() = with(Scanner(System.`in`)) {
    val number = nextInt()
    print( bottomUp(number))
}


fun bottomUp(num: Int): Int {
    val dp = IntArray(num + 1)
    for (i in 2 until num + 1) {
        dp[i] = dp[i - 1] + 1 // -1
        if (i % 2 == 0) {
            dp[i] = dp[i].coerceAtMost(dp[i / 2] + 1)
        }
        if (i % 3 == 0) {
            dp[i] = dp[i].coerceAtMost(dp[i / 3] + 1)
        }
    }
    return dp[num]
}
