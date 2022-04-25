const readline = require("readline");
 
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
})

let input = []

rl.on("line", line => input.push(parseInt(line)))

rl.on("close", () => {
	let i = 0
	let arr = []
	while(i < input.length) {
		let rest = input[i] % 42
		if(arr.indexOf(rest) === -1) {
			arr.push(rest)
		}
		i++
	}
	console.log(arr.length)
})