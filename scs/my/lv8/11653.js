// https://chunghyup.tistory.com/55

const readline = require("readline")
 
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
	const prime = []
	let i = 2
	while(i <= input) {
		if(input % i === 0) {
			input = input / i
			prime.push(i)
			i = 1
		}
		i++
	}
	
	const result = prime.reduce((acc, cur) => acc += cur + "\n", "")
	console.log(result)
})