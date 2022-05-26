// https://tesseractjh.tistory.com/21

const readline = require("readline")
 
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
})

let input = []

rl.on("line", line => {
	input.push(parseInt(line))
})

rl.on("close", () => {
	let arr;
	let sum = input.reduce((acc, cur) => acc += cur, 0)
	for(let i = 0; i < 8; i++) {
		for(let j = i + 1; j < 9; j++) {
			if(sum === 100 + input[i] + input[j]) {
				arr = input.filter(inputNum => inputNum !== input[i] && inputNum !== input[j])
			}
		}
	}
	arr.sort((a, b) => a - b)
	const answer = arr.reduce((acc, cur) => acc += cur + "\n", "")
	console.log(answer)
})