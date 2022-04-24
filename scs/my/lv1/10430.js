const readline = require("readline")

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
})

let input

rl.on("line", line => {
	input = line.split(" ").map(num => parseInt(num))
	rl.close()
})

rl.on("close", () => {
	const [ a, b, c ] = input
	console.log((a + b) % c)
	console.log(((a % c) + (b % c)) % c)
	console.log((a * b) % c)
	console.log(((a % c) * (b % c)) % c)
})