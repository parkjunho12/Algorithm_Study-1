const readline = require("readline");
 
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
	let sum = 0
	let i = 1
	while(i <= input) {
		sum += i
		i++
	}
	console.log(sum)
})