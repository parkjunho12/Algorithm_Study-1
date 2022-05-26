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
	const [ x, y ] = input
	let result
	if(x > 0) {
		if(x * y > 0) result = 1
		else result = 4
	} else {
		if(x * y > 0) result = 3
		else result = 2
	}
	console.log(result)
})