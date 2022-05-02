const readline = require("readline")

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
})

let input = []

rl.on("line", line => {
	input.push(line.split(" ").map(num => parseInt(num)))
})

rl.on("close", () => {
	let [ start, needs ] = input
	let [ hours, minutes ] = start
	needs = needs[0]
	minutes = minutes + needs
	if(minutes >= 60) {
		let h = parseInt(minutes / 60)
		let m = minutes % 60
		minutes = m
		hours = hours + h
		if(hours >= 24) hours = hours - 24
	}
	console.log(hours + " " + minutes)
})