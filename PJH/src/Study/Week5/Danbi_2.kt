import java.util.*
data class Dir(val point: Int , val str: String, val visited: Array<Boolean>)

var answer = -1

fun solution(arr: Array<IntArray>, n: Int, dirName: Array<String>): Int {

   val dirArr = Array<IntArray>(n + 1) {
       IntArray(n + 1){0}
   }

   arr.forEach {
       dirArr[it[0]][it[1]] = 1
       dirArr[it[1]][it[0]] = 1
   }
   val dirNameArr =  Array<String>(n + 1) {
       ""
   }

   dirName.forEachIndexed { index, s ->
       dirNameArr[index + 1] = s
   }

   BFS( dirArr, dirNameArr)


   return answer
}


private fun BFS(computerArr: Array<IntArray>, dirName: Array<String>) {
   val dirQueue: Queue<Dir> = LinkedList()

   dirQueue.add(Dir(1, dirName[1], Array<Boolean>(computerArr.size) { false }.apply { set(1, true) }))
   while (dirQueue.isNotEmpty()) {
       val dir = dirQueue.poll()
       for (i in computerArr[dir.point].indices) {
           if (computerArr[dir.point][i] == 1 && !dir.visited[i]) {
               if (answer < (dir.str + "/" + dirName[i]).length) {
                   answer = (dir.str + "/" + dirName[i]).length
               }
               dirQueue.add(Dir(i, dir.str + "/" + dirName[i], dir.visited.clone().apply { set(i, true) }))

               println((dir.str + "/" + dirName[i]))
           }
       }
   }

}