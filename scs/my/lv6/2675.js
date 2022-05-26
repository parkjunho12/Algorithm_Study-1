const readline = require("readline");
 
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
})

let input = []

rl.on("line", line => {
	input.push(line)
})

rl.on("close", () => {
	input.forEach((each) => {
		const eachArr = each.split(" ")
		if(eachArr.length > 1) {
			const [ r, s ] = each.split(" ")
			const p = s.split("").reduce((acc, cur) => {
				let i = 1
				while(i <= r) {
					acc += cur
					i++
				}
				return acc
			}, "")
			console.log(p)
		}
	})
})