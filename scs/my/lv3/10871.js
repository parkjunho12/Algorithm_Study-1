const readline = require("readline");
 
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
})

let input = []

rl.on("line", line => {
	input.push(line.split(" ").map(num => parseInt(num)))
})

rl.on("close", () => {
	let result = ""
	const [ n, x ] = input[0]
	const a = input[1]
	for (let i = 0; i < n; i++) {
		if (a[i] < x) {
			result = result + a[i] + " "
		}
	}
	console.log(result)
})