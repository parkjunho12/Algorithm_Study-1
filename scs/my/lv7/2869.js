// https://gurtn.tistory.com/52
// https://velog.io/@dragoocho/%EB%B0%B1%EC%A4%80-2869%EB%B2%88-Node.js-%EB%AC%B8%EC%A0%9C%ED%92%80%EC%9D%B4

const readline = require("readline")

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
})

let input

rl.on("line", line => {
	input = line
	rl.close()
})

rl.on("close", () => {
	const [ a, b, v ] = input.split(" ").map(num => parseInt(num))
	let result = Math.ceil((v - b) / (a - b))
	console.log(result)
})