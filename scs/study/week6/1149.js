// https://nyang-in.tistory.com/266

const readline = require("readline")
 
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
})

let input = []

rl.on("line", line => {
	input.push(line)
})

rl.on("close", () => {
	const n = parseInt(input.shift())
	input = input.map((value) => value.split(" ").map((element) => Number(element)))
	for (let i = 1; i < n; i++) {
		input[i][0] = Math.min(input[i - 1][1], input[i - 1][2]) + input[i][0]
		input[i][1] = Math.min(input[i - 1][0], input[i - 1][2]) + input[i][1]
		input[i][2] = Math.min(input[i - 1][0], input[i - 1][1]) + input[i][2]
	}
	console.log(input)
	console.log(Math.min(...input[n - 1]))
})