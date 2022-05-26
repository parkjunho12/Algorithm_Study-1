const readline = require("readline");
 
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
})

let input

rl.on("line", line => {
	input = line.toUpperCase().split("")
	rl.close()
})

rl.on("close", () => {
	const alpha = input.filter((ele, idx) => input.indexOf(ele) === idx)
	const count = new Array(alpha.length).fill(0)
	for (let i = 0; i < input.length; i++) {
		let alphaIDX = alpha.indexOf(input[i])
		count[alphaIDX]++
	}
	
	let max = count[0]
	for (let j = 1; j < count.length; j++) {
		if(max < count[j]) max = count[j]
	}

	const maxFilter = count.filter((ele) => ele === max)
	if (maxFilter.length > 1) {
		console.log("?")
	} else {
		const maxAlpha = alpha[count.indexOf(max)]
		console.log(maxAlpha)
	}
})