import java.util.*
import kotlin.reflect.jvm.internal.impl.builtins.StandardNames.FqNames


//소수 구하기
//시간 제한	메모리 제한	제출	정답	맞힌 사람	정답 비율
//2 초	256 MB	168794	47548	33484	26.719%
//문제
//M이상 N이하의 소수를 모두 출력하는 프로그램을 작성하시오.
//
//입력
//첫째 줄에 자연수 M과 N이 빈 칸을 사이에 두고 주어진다. (1 ≤ M ≤ N ≤ 1,000,000) M이상 N이하의 소수가 하나 이상 있는 입력만 주어진다.
//
//출력
//한 줄에 하나씩, 증가하는 순서대로 소수를 출력한다.
//
//예제 입력 1
//3 16
//예제 출력 1
//3
//5
//7
//11
//13
//출처
//데이터를 추가한 사람: jinjean0123, yongjun042
//채점 및 기타 정보
//이 문제의 채점 우선 순위는 2이다.

fun main() = with(Scanner(System.`in`)) {
    val M = nextInt()
    val N = nextInt()

    for (i in M..N) {
        if (isPrime(i)) {
            println(i)
        }
    }
}

private fun isPrime(number: Int): Boolean {
    if (number == 1) {
        return false
    }
    var i = 2
    while (i*i <= number) {
        if (number % i == 0) {
            return false
        }
        i++
    }
    return true
}
