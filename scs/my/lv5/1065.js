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
	for(let i = 1; i <= input; i++) {
		const n = String(i)
		if(i < 100) {
			count++
		}

		const a = parseInt(n[0]) - parseInt(n[1])
		const b = parseInt(n[1]) - parseInt(n[2])
		
		if(a === b) {
			count++
		}
	}
	console.log(count)
})