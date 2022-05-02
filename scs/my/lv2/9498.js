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
	let result
	switch(Math.floor(input / 10)) {
		case 10:
		case 9:
			result = "A"
			break
		case 8:
			result = "B"
			break
		case 7:
			result = "C"
			break
		case 6:
			result = "D"
			break
		default:
			result = "F"
			break
	}
	console.log(result)
})