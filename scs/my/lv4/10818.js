const readline = require("readline");
 
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
})

let input = []

rl.on("line", line => input.push(line.split(" ").map(num => parseInt(num))))

rl.on("close", () => {
	const min = Math.min(...input[1])
	const max = Math.max(...input[1])
	console.log(min, max)
})