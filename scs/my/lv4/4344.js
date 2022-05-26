const readline = require("readline");
 
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
})

let input = []

rl.on("line", line => input.push(line))

rl.on("close", () => {
	const c = parseInt(input.shift())
	for(let i = 0; i < c; i++) {
		const scores = input[i].split(" ").map(num => parseInt(num))
		const n = scores.shift()
		const sum = scores.reduce((acc, cur) => acc + cur, 0)
		const average = sum / n
		const better = scores.filter(score => score > average)
		const ratio = better.length / n * 100
		const round = ratio.toFixed(3)
		console.log(`${round}%`)
	}
})