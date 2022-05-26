# 사탕 게임 다국어
 
# 시간 제한	메모리 제한	제출	정답	맞힌 사람	정답 비율
# 1 초	128 MB	27478	9071	6247	32.039%
# 문제
# 상근이는 어렸을 적에 "봄보니 (Bomboni)" 게임을 즐겨했다.

# 가장 처음에 N×N크기에 사탕을 채워 놓는다. 사탕의 색은 모두 같지 않을 수도 있다. 상근이는 사탕의 색이 다른 인접한 두 칸을 고른다. 그 다음 고른 칸에 들어있는 사탕을 서로 교환한다. 이제, 모두 같은 색으로 이루어져 있는 가장 긴 연속 부분(행 또는 열)을 고른 다음 그 사탕을 모두 먹는다.

# 사탕이 채워진 상태가 주어졌을 때, 상근이가 먹을 수 있는 사탕의 최대 개수를 구하는 프로그램을 작성하시오.

# 입력
# 첫째 줄에 보드의 크기 N이 주어진다. (3 ≤ N ≤ 50)

# 다음 N개 줄에는 보드에 채워져 있는 사탕의 색상이 주어진다. 빨간색은 C, 파란색은 P, 초록색은 Z, 노란색은 Y로 주어진다.

# 사탕의 색이 다른 인접한 두 칸이 존재하는 입력만 주어진다.

# 출력
# 첫째 줄에 상근이가 먹을 수 있는 사탕의 최대 개수를 출력한다.

# 예제 입력 1 
# 3
# CCP
# CCP
# PPC
# 예제 출력 1 
# 3
# 예제 입력 2 
# 4
# PPPP
# CYZY
# CCPY
# PPCC
# 예제 출력 2 
# 4
# 예제 입력 3 
# 5
# YCPZY
# CYZZP
# CCPPP
# YCYZC
# CPPZZ
# 예제 출력 3 
# 4

import sys

N = int(sys.stdin.readline().strip())

candys = [list(sys.stdin.readline().strip()) for _ in range(N)]

def check(candys) :
    cnt = 1
    answer1 = 1
    for i in range(N) :
        cnt = 1
        for j in range(N - 1) :
            if candys[i][j] == candys[i][j + 1] :
                cnt += 1
            else :
                if answer1 < cnt :
                    answer1 = cnt
                cnt = 1
        if answer1 < cnt :
            answer1 = cnt
    cnt = 1
    answer2 = 1
    for i in range(N) :
        cnt = 1
        for j in range(N - 1) :
            if candys[j][i] == candys[j + 1][i] :
                cnt += 1
            else :
                if answer2 < cnt :
                    answer2 = cnt
                cnt = 1
        if answer2 < cnt :
            answer2 = cnt
    return max(answer1, answer2)

cnt = 1
for i in range(N) :
    for j in range(N - 1) :
        candys[i][j], candys[i][j + 1] = candys[i][j + 1], candys[i][j]
        cnt = max(cnt, check(candys))
        candys[i][j], candys[i][j + 1] = candys[i][j + 1], candys[i][j]

for i in range(N) :
    for j in range(N - 1) :
        candys[j][i], candys[j + 1][i] = candys[j + 1][i], candys[j][i]
        cnt = max(cnt, check(candys))
        candys[j][i], candys[j + 1][i] = candys[j + 1][i], candys[j][i]

print(cnt)
