const readline = require("readline")

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
})

let input = []

rl.on("line", line => input.push(Number(line)))
rl.on("close", () => {
	const [a, b] = input
	console.log(a - b)
})