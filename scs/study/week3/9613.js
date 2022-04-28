const readline = require("readline")
 
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
})

let input = []

rl.on("line", line => input.push(line))

rl.on("close", () => {
	const t = parseInt(input.shift())
	for(let i = 0; i < t; i++) {
		const caseArr = input[i].split(" ").map(num => parseInt(num))
		const n = caseArr.shift()
		const min = Math.min(...caseArr)
		for(let j = 1; j < n; j++) {
			console.log(i, j, min, caseArr[i], caseArr[j])
			//checkGCD(min, caseArr[i], caseArr[j])
			//continue
		}
	}
	
})

