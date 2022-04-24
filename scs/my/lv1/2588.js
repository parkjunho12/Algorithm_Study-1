const readline = require("readline")

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
})

let input = []

rl.on("line", line => input.push(line))

rl.on("close", () => {
	let [ a, b ] = input
	const numB = b.split("").map(num => parseInt(num))
	a = parseInt(a)
	b = parseInt(b)
	let i = numB.length - 1
	while(i >= 0) {
		console.log(a * numB[i])
		i--
	}
	console.log(a * b)
})