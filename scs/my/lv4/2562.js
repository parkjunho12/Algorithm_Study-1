const readline = require("readline");
 
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
})

let input = []

rl.on("line", line => input.push(parseInt(line)))

rl.on("close", () => {
	const max = Math.max(...input)
	const maxIdx = input.indexOf(max) + 1
	console.log(max)
	console.log(maxIdx)
})