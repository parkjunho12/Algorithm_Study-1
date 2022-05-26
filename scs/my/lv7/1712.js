// https://gurtn.tistory.com/47

const readline = require("readline")
 
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
})

let input

rl.on("line", line => input = line)

rl.on("close", () => {
	const [ a, b, c ] = input.split(" ").map(num => parseInt(num))
	if(c - b <= 0) {
		console.log(-1)
	} else {
		console.log(Math.floor(a / (c - b)) + 1)
	}
})