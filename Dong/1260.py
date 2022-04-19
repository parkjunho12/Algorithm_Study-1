import sys
from collections import deque

N, M, V = map(int, sys.stdin.readline().strip().split())
graph = [[] for _ in range(N + 1)]

for _ in range(M) :
    a, b = map(int, sys.stdin.readline().strip().split())
    graph[a].append(b)
    graph[b].append(a)
    
for g in graph :
    g.sort()
    
dcheck = [False for _ in range(N + 1)]
def dfs(x) :
    dcheck[x] = True
    print(x, end = " ")
    for y in graph[x] :
        if not dcheck[y] :
            dfs(y)

def bfs() :
    queue = deque([V])
    bcheck = [False for _ in range(N + 1)]
    bcheck[V] = True
    while queue :
        z = queue.popleft()
        print(z, end = " ")
        for i in graph[z] :
            if not bcheck[i] :
                bcheck[i] = True
                queue.append(i)
                
dfs(V)
print()
bfs()

# Input
# 4 5 1
# 1 2
# 1 3
# 1 4
# 2 4
# 3 4

# Result
# 1 2 4 3
# 1 2 3 4