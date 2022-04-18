import BaekJoon.BaekJoon_1260_S2

fun main() {
    val exStr = "4 5 1\n" +
            "1 2\n" +
            "1 3\n" +
            "1 4\n" +
            "2 4\n" +
            "3 4"

    val exStr2 = "5 5 3\n" +
            "5 4\n" +
            "5 2\n" +
            "1 2\n" +
            "3 4\n" +
            "3 1"
    val baekjoon1260S2 = BaekJoon_1260_S2()

    println(baekjoon1260S2.solution(exStr2))

}