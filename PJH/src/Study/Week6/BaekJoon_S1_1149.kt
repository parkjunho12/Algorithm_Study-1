import java.util.*

//RGB거리에는 집이 N개 있다. 거리는 선분으로 나타낼 수 있고, 1번 집부터 N번 집이 순서대로 있다.
//
//집은 빨강, 초록, 파랑 중 하나의 색으로 칠해야 한다. 각각의 집을 빨강, 초록, 파랑으로 칠하는 비용이 주어졌을 때, 아래 규칙을 만족하면서 모든 집을 칠하는 비용의 최솟값을 구해보자.
//
//1번 집의 색은 2번 집의 색과 같지 않아야 한다.
//N번 집의 색은 N-1번 집의 색과 같지 않아야 한다.
//i(2 ≤ i ≤ N-1)번 집의 색은 i-1번, i+1번 집의 색과 같지 않아야 한다.
//입력
//첫째 줄에 집의 수 N(2 ≤ N ≤ 1,000)이 주어진다. 둘째 줄부터 N개의 줄에는 각 집을 빨강, 초록, 파랑으로 칠하는 비용이 1번 집부터 한 줄에 하나씩 주어진다. 집을 칠하는 비용은 1,000보다 작거나 같은 자연수이다.
//
//출력
//첫째 줄에 모든 집을 칠하는 비용의 최솟값을 출력한다.
//
//예제 입력 1
//3
//26 40 83
//49 60 57
//13 89 99
//예제 출력 1
//96
//예제 입력 2
//3
//1 100 100
//100 1 100
//100 100 1
//예제 출력 2
//3

fun main() = with(Scanner(System.`in`)) {
    val homeCount = nextLine().toInt()
    val homeArr = Array<IntArray>(homeCount){
        IntArray(3) {
            0
        }
    }
    for (i in 0 until homeCount) {
        val readLine = nextLine()
        val rgbLine = readLine.split(" ")
        val red = rgbLine[0].toInt()
        val green = rgbLine[1].toInt()
        val blue = rgbLine[2].toInt()
        homeArr[i][0] = red
        homeArr[i][1] = green
        homeArr[i][2] = blue
    }

    for (i in homeArr.indices) {
        when (i) {
            1 -> {
                homeArr[i][0] = (homeArr[i - 1][1] + homeArr[i][0]).coerceAtMost(homeArr[i - 1][2] + homeArr[i][0])
                homeArr[i][1] = (homeArr[i - 1][0] + homeArr[i][1]).coerceAtMost(homeArr[i - 1][2] + homeArr[i][1])
                homeArr[i][2] = (homeArr[i - 1][0] + homeArr[i][2]).coerceAtMost(homeArr[i - 1][1] + homeArr[i][2])
            }
            0 -> {
                continue
            }
            else -> {
                homeArr[i][0] = (homeArr[i - 1][1] + homeArr[i][0]).coerceAtMost(homeArr[i - 1][2] + homeArr[i][0])
                homeArr[i][1] = (homeArr[i - 1][0] + homeArr[i][1]).coerceAtMost(homeArr[i - 1][2] + homeArr[i][1])
                homeArr[i][2] = (homeArr[i - 1][0] + homeArr[i][2]).coerceAtMost(homeArr[i - 1][1] + homeArr[i][2])
            }
        }
    }
    var minCost = Int.MAX_VALUE
    homeArr[homeArr.lastIndex].forEach {
        if (minCost > it) {
            minCost = it
        }
    }
    print(minCost)
}
