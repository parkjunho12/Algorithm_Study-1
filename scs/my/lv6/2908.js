const readline = require("readline")
 
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
})

let input

rl.on("line", line => {
	input = line.split(" ")
	rl.close()
})

rl.on("close", () => {
	const num1 = parseInt(input[0].split("").reverse().join(""))
	const num2 = parseInt(input[1].split("").reverse().join(""))
	console.log(num1 > num2 ? num1 : num2)
})