// https://velog.io/@wltnrms0629/JS%EB%B0%B1%EC%A4%80-1193%EB%B2%88-%EB%B6%84%EC%88%98%EC%B0%BE%EA%B8%B0

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
	let groupCount = 0
	const ascending = []
	const descending = []

	while(input > 0) {
		groupCount++
		input = input - groupCount
	}

	for(let i = 0; i < groupCount; i++) {
		ascending.push(i + 1)
		descending.push(groupCount - i)
	}
	
	if(groupCount % 2 === 0) {
		console.log(`${ascending[input + groupCount - 1]}/${descending[input + groupCount - 1]}`)
	} else {
		console.log(`${descending[input + groupCount - 1]}/${ascending[input + groupCount - 1]}`)
	}
})