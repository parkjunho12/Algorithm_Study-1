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
	const max = Math.max(...input)
	if(a === b && a === c) {
		console.log(10000 + a * 1000)
	} else if(a === b || a === c) {
		console.log(1000 + a * 100)
	} else if(b === c) {
		console.log(1000 + b * 100)
	} else {
		console.log(max * 100)
	}
})