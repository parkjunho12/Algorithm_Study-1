const readline = require("readline")

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
})

let input

rl.on("line", line => {
	input = line.split(" ").map(num => parseInt(num))
	rl.close()
})

rl.on("close", () => {
	let [ h, m ] = input
	m = m - 45
	if(m < 0) {
		m = m + 60
		h--
		if(h === -1) h = 23
	}
	console.log(`${h} ${m}`)
})