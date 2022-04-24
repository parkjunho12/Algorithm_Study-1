const readline = require("readline")

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
})

let input = []

rl.on("line", line => input.push(line))
rl.on("close", () => dfsVirus(input))


// DFS에서는 인접한 정점을 발견한 후, 해당 정점을 방문하지 않은 상태라면 그 정점을 바로 방문한다.
// 이를 반복하다 방문하지 않은 인접 정점이 더이상 없다면 마지막에 따라왔던 간선을 따라 뒤로 돌아가고 이를 반복한다.
function dfsVirus(input) {
	let node = Number(input.shift()) // 정점갯수
	let graph = [...new Array(node +1)].map(() => []) // 각 정점 별 방문한 인접 정점 그래프
	let visited = [...new Array(node +1)].fill(0) // 각 정점 별 방문 여부
	let result = 0
	input.splice(0, 1)
	console.log("--- input ---")
	console.log(input)
	// 각 정점 별 번호 쌍들을 이용해 그래프 생성(행렬 유사)
	// 배열(input)의 str요소(ex. "1 2")가 start, end 정점과 연결된 정점들로 이루어진 배열이 되도록 그래프 배열을 생성한다.
	// 정점 별 간선 연결되있는 정점이라고 보면 된다.
	input.forEach(inputString => {
		let [ start, end ] = inputString.split(" ").map((numString) => Number(numString))
		graph[start].push(end)
		graph[end].push(start)
	})
	console.log("--- graph ---")
	console.log(graph)

	// 1번노드 방문처리(start)
	visited[1] = 1
	// dfs 시작
	function dfs(start) {
		for(let end of graph[start]) {
			// 방문여부 false일 경우
			if(!visited[end]) {
				// 방문처리 및 result + 1
				visited[end] = 1
				result++
				// start(배열 index값)의 배열 내 value을 새로운 index로 해서 dfs 재실행(재귀)
				dfs(end)
			}
		}
	}
	dfs(1)
	console.log("--- result ---")
	console.log(result)
}