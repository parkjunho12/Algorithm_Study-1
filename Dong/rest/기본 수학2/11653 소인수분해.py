# 소인수분해
# 시간 제한	메모리 제한	제출	정답	맞힌 사람	정답 비율
# 1 초	256 MB	55928	30014	23411	52.363%
# 문제
# 정수 N이 주어졌을 때, 소인수분해하는 프로그램을 작성하시오.

# 입력
# 첫째 줄에 정수 N (1 ≤ N ≤ 10,000,000)이 주어진다.

# 출력
# N의 소인수분해 결과를 한 줄에 하나씩 오름차순으로 출력한다. N이 1인 경우 아무것도 출력하지 않는다.

# 예제 입력 1 
# 72
# 예제 출력 1 
# 2
# 2
# 2
# 3
# 3
# 예제 입력 2 
# 3
# 예제 출력 2 
# 3
# 예제 입력 3 
# 6
# 예제 출력 3 
# 2
# 3
# 예제 입력 4 
# 2
# 예제 출력 4 
# 2
# 예제 입력 5 
# 9991
# 예제 출력 5 
# 97
# 103

from re import I
import sys

N = int(input())

if N == 1 :
    sys.exit(0)

# while True :
#     i += 1
#     check = 0
#     for j in range(1, i + 1) :
#         if i % j == 0 :
#             check += 1
#         if check > 2 :
#             break
#     if check == 2 :
#         prime.append(i)
#     while True :
#         if N % prime[-1] == 0 :
#             print(prime[-1])
#             N /= prime[-1]
#         else :
#             break
#     if N == 1 :
#         break

i = 2

while True :
    if N % i == 0 :
        print(i)
        N /= i
        if N == 1 :
            break
    else :
        i += 1

