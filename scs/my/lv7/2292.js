// https://gurtn.tistory.com/61

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
	let range = 1
	let block = 1
	while(block < input) {
		block += 6 * range
		range++
	}

	console.log(range)
})