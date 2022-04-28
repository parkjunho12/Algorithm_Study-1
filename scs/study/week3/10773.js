const readline = require("readline")
 
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
})

let input = []

rl.on("line", line => input.push(parseInt(line)))

rl.on("close", () => {
	const k = input.shift()
	const arr = [input[0]]
	for(let i = 1; i < k; i++) {
		if(input[i] === 0) arr.pop()
		else arr.push(input[i])
	}
	
	const sum = arr.reduce((acc, cur) => cur += acc, 0)
	console.log(sum)
})