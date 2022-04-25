const readline = require("readline");
 
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
})

let input = []

rl.on("line", line => input.push(line))

rl.on("close", () => {
	const n = parseInt(input[0])
	const point = input[1].split(" ").map(num => parseInt(num))
	const max = Math.max(...point)
	const newPoint = point.map(each => each / max * 100)
	const sum = newPoint.reduce((acc, cur) => acc + cur, 0)
	const average = sum / n
	console.log(average)
})