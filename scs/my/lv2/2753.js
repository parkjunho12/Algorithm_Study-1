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
	let result = input % 400 === 0 || (input % 4 === 0 && input % 100 !== 0)
	console.log(`${result ? 1 : 0}`)
})