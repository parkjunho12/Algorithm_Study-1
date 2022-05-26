const readline = require("readline");
 
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
})

let input = []

rl.on("line", line => input.push(parseInt(line)))

rl.on("close", () => {
	const [ a, b, c ] = input
	const count = [...new Array(10)].fill(0)
	const number = a * b * c
	String(number).split("").forEach(num => {
		count[num] += 1
	})
	
	let i = 0
	while(i <  10) {
		console.log(count[i])
		i++
	}
})