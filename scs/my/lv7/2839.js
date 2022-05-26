// https://velog.io/@hadam/JS-%EB%B0%B1%EC%A4%80-2839-%EC%84%A4%ED%83%95-%EB%B0%B0%EB%8B%AC

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
	let result = -1
	let five = Math.floor(input / 5)
	while(five >= 0) {
		let remain = input - five * 5
		if(remain % 3 === 0) {
			result = five + (remain / 3)
			break
		} else {
			five -= 1
		}
	}
	console.log(result)
})