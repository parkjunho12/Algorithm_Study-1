const readline = require("readline");
 
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
})

let input = []

rl.on("line", line => input.push(line))

rl.on("close", () => {
	const [ n, number ] = input
	const sum = number.split("").reduce((acc, cur) => acc += parseInt(cur), 0)
	console.log(sum)
})