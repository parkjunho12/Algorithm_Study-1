const readline = require("readline")
 
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
})

let input

rl.on("line", line => {
	input = line
	rl.close()
})

rl.on("close", () => {
	input = input.split(" ")
	let a = BigInt(input[0])
	let b = BigInt(input[1])
	let sum = a + b
	console.log(sum.toString())
})