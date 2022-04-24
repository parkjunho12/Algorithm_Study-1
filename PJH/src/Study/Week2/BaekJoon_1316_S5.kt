package Study.Week2

import java.util.*
import kotlin.collections.HashSet

fun main() = with(Scanner(System.`in`)) {
    val wordsCount = readLine()!!.toInt()
    var answer = 0
    for (i in 0 until wordsCount) {
        val wordSet: MutableSet<Char> = HashSet()
        val word = readLine()!!
        var isGroupWord = true
        var curChar: Char? = null
        for (j in word.indices) {
            if (wordSet.contains(word[j])) {
                if (curChar == word[j]) {
                    curChar = word[j]
                    continue
                } else {

                    curChar = word[j]
                    isGroupWord = false
                    break
                }
            } else {

                wordSet.add(word[j])
                curChar = word[j]
            }
        }
        if (isGroupWord) {
            answer++
        }
    }
    print(answer)
}
