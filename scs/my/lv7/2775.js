// https://velog.io/@hadam/JS-%EB%B0%B1%EC%A4%80-2775-%EB%B6%80%EB%85%80%ED%9A%8C%EC%9E%A5%EC%9D%B4-%EB%90%A0%ED%85%8C%EC%95%BC

const readline = require("readline")

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
})

let input = []

rl.on("line", line => {
	input.push(parseInt(line))
})

rl.on("close", () => {
	const t = input.shift()
	
	for(let i = 0; i < t; i++) {
		const k = input.shift()
		const n = input.shift()
		const house = Array.from(Array(k + 1), () => Array(n + 1).fill(0))

		for(let j = 1; j <= n; j++) {
			house[0][j] = j
		}

		for(let i = 1; i <= k; i++) {
			for(let j = 1; j <= n; j++) {
				house[i][j] = house[i - 1][j] + house[i][j - 1]
			}
		}
		
		console.log(house[k][n])
	}
})