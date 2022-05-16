import java.util.*

fun main() = with(Scanner(System.`in`)) {
    val arr = IntArray(9) {
        0
    }

    for (i in arr.indices) {
        arr[i] = nextInt()
    }
    val totalSize = arr.sum()

    arr.sortDescending()
    for (i in arr.indices) {
        var isBreak = false
        for (j in i + 1 until arr.size) {
            if (totalSize - (arr[i] + arr[j]) == 100) {
                val filterArr = arr.filterIndexed { index, _ -> index != i && index != j }
                for (k in filterArr.lastIndex downTo 0) {
                    println(filterArr[k])
                }
                isBreak = true
                break
            }
        }
        if (isBreak) {
            break
        }
    }
}