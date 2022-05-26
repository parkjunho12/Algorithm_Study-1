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
	let i = 1
	while(i < 10) {
		console.log(`${input} * ${i} = ${input * i}`)
		i++
	}
})