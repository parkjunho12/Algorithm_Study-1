const readline = require("readline")
 
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
})

const phone = {
	2: "ABC",
	3: "DEF",
	4: "GHI",
	5: "JKL",
	6: "MNO",
	7: "PQRS",
	8: "TUV",
	9: "WXYZ",
}

let input

rl.on("line", line => {
	input = line
	rl.close()
})

rl.on("close", () => {
	let time = 0
	for(let i = 0; i < input.length; i++) {
		for(let j = 2; j <= 9; j++) {
			if(phone[j].includes(input[i])) {
				time += j + 1
			}
		}
	}
	console.log(time)
})