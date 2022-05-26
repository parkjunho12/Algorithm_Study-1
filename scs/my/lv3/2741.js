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
	let i = 1
	while(i <= input) {
		console.log(i)
		i++
	}
})
// 시간초과?
// let input = Number(require('fs').readFileSync('/dev/stdin').toString())
// let answer = ''
// for (let i = 1; i <= input; i++) {
//     answer += i + '\n'
// }
// console.log(answer)