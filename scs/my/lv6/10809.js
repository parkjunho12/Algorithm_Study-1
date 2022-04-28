const readline = require("readline");
 
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
	let answerArr = []
	for (let i = 97; i <= 122; i++) {
		let alph = String.fromCharCode(i)
		let answer = input.indexOf(alph)
		answerArr += answer + " "
	}
	console.log(answerArr)
})