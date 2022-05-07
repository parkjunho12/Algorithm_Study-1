// https://velog.io/@dragoocho/%EB%B0%B1%EC%A4%80-10250%EB%B2%88-Node.js-%EB%AC%B8%EC%A0%9C%ED%92%80%EC%9D%B4

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
	const t = parseInt(input.shift())
	let answer = ""
	
	for(let i = 0; i < t; i++) {
		const inputArr = input[i].split(" ").map(inputNumber => parseInt(inputNumber))
		const h = inputArr[0]
		const n = inputArr[2]
		let answerH = n % h
		if(answerH === 0) {
			answerH = h
		}		
		let answerW = Math.ceil(n / h)
		if(answerW < 10) {
			answerW = "0" + answerW
		}
		answer += `${answerH}${answerW}` + "\n"
	}

	console.log(answer)
})