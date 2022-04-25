const readline = require("readline");
 
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
})

let input = []

rl.on("line", line => input.push(line))

rl.on("close", () => {
	const n = parseInt(input.shift())
	for(let i = 0; i < input.length; i++) {
		let total = 0
		let now = 0
		const inputArray = input[i].split("")
		inputArray.forEach(result => {
			if(result === "X") now = 0
			else now = now + 1
			total = total + now
		})
		console.log(total)
	}
})