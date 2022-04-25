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
	let stars = ''
	for(let i = 1; i <= input; i++) {
		stars = stars + '*'.repeat(i)
		stars = stars + '\n'
	}
	console.log(stars)
})