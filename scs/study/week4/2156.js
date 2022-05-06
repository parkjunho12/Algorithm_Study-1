// https://tesseractjh.tistory.com/116?category=470361
// https://mygumi.tistory.com/98

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
	const n = input.shift()
	// 1 ~ n 잔까지 마실 수 있는 n잔 별 최대양(0 index 사용 안함)
	const dp = new Array(n + 1).fill(0)
	dp[1] = input[0]
	dp[2] = input[0] + input[1]
	if(n === 1) return console.log(dp[1])
	else if(n === 2) return console.log(dp[2])
	
	for(let i = 3; i <= n; i++) {
		console.log(`========== for ${i} ==========`)
		console.log("input", input)
		console.log("dp", dp)
		// i번째 잔 먹을 경우 (3잔 연속 불가)
		// i, i-1잔 먹을 경우
		console.log(`${dp[i - 3]} + ${input[i - 2]} + ${input[i - 1]} = ${dp[i - 3] + input[i - 2] + input[i - 1]}`)
		// i잔 먹고 i-1잔 안먹을 경우
		console.log(`${dp[i - 2]} + ${input[i - 1]} = ${dp[i - 2] + input[i - 1]}`)
		// 연속으로 안먹을 경우
		console.log(dp[i - 1])
		
		dp[i] = Math.max(dp[i - 3] + input[i - 2] + input[i - 1], dp[i - 2] + input[i - 1], dp[i - 1])
	}
	
	console.log(`========== result ==========`)
	console.log(dp, dp[n])
})