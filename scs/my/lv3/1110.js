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
	let count = 0
	let addNumber = 0
	let newNumber = input
	let same = false
	while(!same) {
		addNumber = Math.floor(newNumber / 10) + (newNumber % 10)
		newNumber = (newNumber % 10) * 10 + (addNumber % 10)
		count++
		if(newNumber === input) {
			console.log(count)
			same = true
		}
	}
})