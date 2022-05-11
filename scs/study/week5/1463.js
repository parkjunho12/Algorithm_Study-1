// https://webruden.tistory.com/1035

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
	const dp = new Array(input + 1).fill(0)
	for(let i = 2; i < dp.length; i++) {
		console.log(`===== ${i} =====`)
		dp[i] = dp[i - 1] + 1
		console.log(dp[i])
		if(i % 2 === 0) {
			console.log("case 2", dp[i], dp[i / 2] + 1)
			dp[i] = Math.min(dp[i], dp[i / 2] + 1)
		}
		if(i % 3 === 0) {
			console.log("case 3", dp[i], dp[i / 3] + 1)
			dp[i] = Math.min(dp[i], dp[i / 3] + 1)
		}
	}
	console.log(dp)
	console.log(dp[input])
})