const readline = require("readline");
 
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
})

let input = []

rl.on("line", line => {
	input.push(line)
})

rl.on("close", () => {
	const count = input.length
	let i = 0
	while(i < count) {
		const [ a, b ] = input[i].split(" ").map(num => parseInt(num))
		if(a !== 0 && b !== 0) console.log(a + b)
		i++
	}
})