const readline = require("readline")
 
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
})

let input = []

rl.on("line", line => {
	input.push(line)
})

rl.on("close", () => {
	const n = parseInt(input.shift())
	input = input[0].split(" ").map(num => parseInt(num))
	
	input = input.filter(val => {
		if(val > 1) return isPrime(val) && val
	})

	console.log(input.length)
})

const isPrime = (num) => {
	for(let i = 2; i < num; i++) {
		if(num % i === 0) return false
	}
	return true
}