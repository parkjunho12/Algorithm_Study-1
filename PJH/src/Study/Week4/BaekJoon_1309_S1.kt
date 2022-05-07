package Study.Week4

import java.util.*

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



    for (i in zooArr.indices) {
        for (j in zooArr.indices) {
            BFS(Direction(i, j))
        }
    }
}

private fun BFS(direction: Direction) {
    val zooQueue: Queue<Direction> = LinkedList()
    zooQueue.add(direction)
    while (zooQueue.isNotEmpty()) {
        val curDirection = zooQueue.poll()
        val curX = curDirection.x
        val curY = curDirection.y



    }
}

data class Direction(val x: Int,val y: Int)