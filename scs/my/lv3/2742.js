const readline = require("readline");
 
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
	while(input !== 0) {
		console.log(input)
		input--
	}
})
// 시간초과?
// let input = Number(require('fs').readFileSync('/dev/stdin').toString())
// let answer = ''
// for (let i = input; i > 0; i--) {
//     answer += i + '\n'
// }
// console.log(answer)