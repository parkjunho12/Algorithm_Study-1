package Study.Week2

import java.util.*

fun main() = with(Scanner(System.`in`)) {
    val computerNum = readLine()!!.toInt()
    val coupleNum = readLine()!!.toInt()

    val computerArr: Array<IntArray> = Array<IntArray>(computerNum + 1) { IntArray(computerNum + 1) { 0 } }



    for (i in 0 until coupleNum) {
        val coupleStr = readLine()!!.split(" ")
        val xCouple = coupleStr[0].toInt()
        val yCouple = coupleStr[1].toInt()
        computerArr[xCouple][yCouple] = 1
        computerArr[yCouple][xCouple] = 1
    }
    BFS(1, computerArr)
}

private fun BFS(startingPoint: Int, computerArr: Array<IntArray>) {
    val virusQueue: Queue<Int> = LinkedList()
    val visited = Array<Boolean>(computerArr.size) { false }
    virusQueue.add(startingPoint)
    var answer = -1
    while (virusQueue.isNotEmpty()) {
        val virusPoint = virusQueue.poll()
        for (i in computerArr[virusPoint].indices) {
            if (computerArr[virusPoint][i] == 1 && !visited[i]) {
                answer++
                visited[i] = true
                virusQueue.add(i)
            }
        }
    }

    println(answer)
}
