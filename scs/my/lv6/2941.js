const readline = require("readline")
 
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
})

const hovText = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="]

let input

rl.on("line", line => {
	input = line
	rl.close()
})

rl.on("close", () => {
	for (let ele of hovText) {
    input = input.split(ele).join("*")
  }
	console.log(input.length)
})