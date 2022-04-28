const readline = require("readline")
 
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
})

let input

rl.on("line", line => {
	input = line.trim().split(" ")
	rl.close()
})

rl.on("close", () => {
	console.log(input[0] === "" ? 0 : input.length)
})
