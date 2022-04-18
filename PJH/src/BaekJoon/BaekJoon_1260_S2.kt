package BaekJoon

import java.util.*

class BaekJoon_1260_S2 {
    var treeArr: Array<IntArray>? = null
    var visited: Array<Boolean>? = null
    fun solution(str: String): String {
        var answer = ""

        val strSplit = str.split("\n")


        val splitPoSet = strSplit[0].split(" ")
        val pointNum = splitPoSet[0].toInt()
        val lineNum = splitPoSet[1].toInt()
        val startPoint = splitPoSet[2].toInt()

        treeArr = Array<IntArray>(pointNum + 1){ IntArray(pointNum + 1){ -1 } }
        visited = Array(pointNum + 1) {false}

        strSplit.forEachIndexed { index, s ->
            if (index > 0) {
                val split = s.split(" ")
                val x = split[0].toInt()
                val y = split[1].toInt()
                treeArr!![x][y] = 1
                treeArr!![y][x] = 1
            }
        }

        treeArr!!.forEach {
            it.forEach {
                print("$it ")
            }
            println()
        }
        DFS(startPoint)

        println()
        visited = Array(pointNum + 1) {false}
        BFS(startPoint)


        return answer
    }



    private fun DFS(startPoint: Int) {
        print("$startPoint ")
        visited!![startPoint] = true
        for (i in 1 until treeArr!![startPoint].size) {
            if (treeArr!![startPoint][i] == 1 && !visited!![i]) {
                DFS(i)
            }
        }
    }

    private fun BFS(startPoint: Int) {
        val queue: Queue<Int> = LinkedList()
        queue.add(startPoint)
        print("$startPoint ")
        visited!![startPoint] = true
        while (queue.isNotEmpty()) {
            val point = queue.poll()
            for (i in 1 until treeArr!!.size) {
                if (treeArr!![point][i] == 1 && !visited!![i]) {
                    queue.add(i)
                    visited!![i] = true
                    print("$i ")
                }
            }
        }
    }

}