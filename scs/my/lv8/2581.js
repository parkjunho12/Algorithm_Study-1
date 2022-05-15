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
	const [m, n] = input
	const arr = []

	for(let i = m; i <= n; i++) {
		if(i > 1) {
			let flag = true
			for(let j = 2; j < i; j++) {
				if(i % j === 0) flag = false
			}
			if(flag) arr.push(i)
		}
	}
	
	if(arr.length === 0) {
		console.log(-1)
	} else {
		const min = Math.min(...arr)
		const sum = arr.reduce((acc, cur) => acc += cur, 0)
		console.log(sum + "\n" + min)
	}
})