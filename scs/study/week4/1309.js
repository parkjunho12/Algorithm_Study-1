// https://velog.io/@0r0loo/%EB%B0%B1%EC%A4%80-%EB%8F%99%EB%AC%BC%EC%9B%90-1309-JavaScript

const readline = require("readline")
 
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
})

let input

rl.on("line", line => {
	input = parseInt(line)
	rl.close()
})

rl.on("close", () => {
	const dp = [0, 3, 7]
	for(let i = 3; i <= input; i++) {
		dp[i] = (dp[i - 1] * 2 + dp[i - 2]) % 9901
	}
	console.log(dp, dp[input])
})