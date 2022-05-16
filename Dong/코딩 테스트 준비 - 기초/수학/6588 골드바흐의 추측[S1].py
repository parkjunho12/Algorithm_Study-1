# 골드바흐의 추측 다국어
 
# 시간 제한	메모리 제한	제출	정답	맞힌 사람	정답 비율
# 1 초	256 MB	52517	14466	9521	25.642%
# 문제
# 1742년, 독일의 아마추어 수학가 크리스티안 골드바흐는 레온하르트 오일러에게 다음과 같은 추측을 제안하는 편지를 보냈다.

# 4보다 큰 모든 짝수는 두 홀수 소수의 합으로 나타낼 수 있다.
# 예를 들어 8은 3 + 5로 나타낼 수 있고, 3과 5는 모두 홀수인 소수이다. 또, 20 = 3 + 17 = 7 + 13, 42 = 5 + 37 = 11 + 31 = 13 + 29 = 19 + 23 이다.

# 이 추측은 아직도 해결되지 않은 문제이다.

# 백만 이하의 모든 짝수에 대해서, 이 추측을 검증하는 프로그램을 작성하시오.

# 입력
# 입력은 하나 또는 그 이상의 테스트 케이스로 이루어져 있다. 테스트 케이스의 개수는 100,000개를 넘지 않는다.

# 각 테스트 케이스는 짝수 정수 n 하나로 이루어져 있다. (6 ≤ n ≤ 1000000)

# 입력의 마지막 줄에는 0이 하나 주어진다.

# 출력
# 각 테스트 케이스에 대해서, n = a + b 형태로 출력한다. 이때, a와 b는 홀수 소수이다. 숫자와 연산자는 공백 하나로 구분되어져 있다. 만약, n을 만들 수 있는 방법이 여러 가지라면, b-a가 가장 큰 것을 출력한다. 또, 두 홀수 소수의 합으로 n을 나타낼 수 없는 경우에는 "Goldbach's conjecture is wrong."을 출력한다.

# 예제 입력 1 
# 8
# 20
# 42
# 0
# 예제 출력 1 
# 8 = 3 + 5
# 20 = 3 + 17
# 42 = 5 + 37

# def prime(n) :
#     if n == 1 :
#         return False
#     for i in range(2, int(n ** 0.5) + 1) :
#         if n % i == 0 :
#             return False
#     return True

# primeNumber = [2]

# for j in range(3, 10000, 2) :
#     if prime(j) :
#         primeNumber.append(j)



# # 소수 판별 함수(에라토스테네스의 체)
# import math
# import sys


# def is_prime_number(n):
#     # 2부터 n까지의 모든 수에 대하여 소수 판별
#     array = [True for i in range(n+1)] # 처음엔 모든 수가 소수(True)인 것으로 초기화(0과 1은 제외)

#     # 에라토스테네스의 체
#     for i in range(2, int(math.sqrt(n)) + 1): #2부터 n의 제곱근까지의 모든 수를 확인하며
#         if array[i] == True: # i가 소수인 경우(남은 수인 경우)
#             # i를 제외한 i의 모든 배수를 지우기
#             j = 2
#             while i * j <= n:
#                 array[i * j] = False
#                 j += 1

#     return [ i for i in range(2, n+1) if array[i] ]

# # N이 1,000,000 이내로 주어지는 경우 활용할 것 => 이론상 400만번 정도 연산이고 메모리도 충분함

# primeNumber = is_prime_number(1000000)

# while True :
#     answer = []
#     even = int(sys.stdin.readline())
#     if even == 0 : 
#         break
#     half = even//2  # 입력받은 짝수를 2로 나눈 몫을 구함. / 기호를 쓰면 실수가 됨.
#     for x in range(half, 1, -1):  # 차이가 적은 두 수를 구하기 위해서 큰수부터 꺼냄
#         if (even-x in primeNumber) and (x in primeNumber):  # even-x 와 x가 소수 집합에 포함 되었는지 확인
#             answer.append(x)
#     if len(answer) == 0 :
#         print("Goldbach's conjecture is wrong.")
#         break
#     print("{0} = {1} + {2}".format(even, min(answer), even - min(answer)))


from sys import stdin

array = [True for i in range(1000001)]

for i in range(2, 1001):
    if array[i]:
        for k in range(i + i, 1000001, i):
            array[k] = False

while True:
    n = int(stdin.readline())

    if n == 0: break

    for i in range(3, len(array)):
        if array[i] and array[n-i]:
            print(n, "=", i, "+", n-i)
            break