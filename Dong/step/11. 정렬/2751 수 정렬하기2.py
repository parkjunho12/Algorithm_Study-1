# 수 정렬하기 2
 
# 시간 제한	메모리 제한	제출	정답	맞힌 사람	정답 비율
# 2 초	256 MB	182969	51244	35226	30.262%
# 문제
# N개의 수가 주어졌을 때, 이를 오름차순으로 정렬하는 프로그램을 작성하시오.

# 입력
# 첫째 줄에 수의 개수 N(1 ≤ N ≤ 1,000,000)이 주어진다. 둘째 줄부터 N개의 줄에는 수가 주어진다. 이 수는 절댓값이 1,000,000보다 작거나 같은 정수이다. 수는 중복되지 않는다.

# 출력
# 첫째 줄부터 N개의 줄에 오름차순으로 정렬한 결과를 한 줄에 하나씩 출력한다.

# 예제 입력 1 
# 5
# 5
# 4
# 3
# 2
# 1
# 예제 출력 1 
# 1
# 2
# 3
# 4
# 5

import sys

N = int(sys.stdin.readline())

nums = []

for i in range(N) :
    nums.append(int(sys.stdin.readline()))

def merge_sort(a):
    def sort(unsorted_list):
        if len(unsorted_list) <= 1:
            return
        # 두개의 리스트로 분할. 아래에서 재귀적으로 시행
        mid = len(unsorted_list) // 2
        left = unsorted_list[:mid]
        right = unsorted_list[mid:]
        merge_sort(left)
        merge_sort(right)
        merge(left, right)
        
    def merge(left, right):
        i = 0
        j = 0
        k = 0
        while (i < len(left)) and (j < len(right)):
            if left[i] < right[j]:
                a[k] = left[i]
                i += 1
                k+= 1
            else:
                a[k] = right[j]
                j += 1
                k+= 1
        # 남은 데이터 삽입
        while i < len(left):
            a[k] = left[i]
            i += 1
            k+= 1
        while j < len(right):
            a[k] = right[j]
            j += 1
            k+= 1
    sort(a)
    return a

print("\n".join(map(str, merge_sort(nums))))
