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
	input.forEach((inputNumber) => {
		if(inputNumber > 0) {
			isPrime(inputNumber)
		}
	})
})

const isPrime = (num) => {
	let arr = new Array(num * 2 + 1).fill(true)
	arr[0] = false
	arr[1] = false
	
	for(let i = 2; i <= num * 2; i++) {
		if(arr[i]) {
			for(let j = 2; j <= num * 2 / i; j++) {
				arr[i * j] = false
			}
		}
	}
	
	arr.splice(0, num + 1)
	let filterd = arr.filter(item => item && item)
	console.log(filterd.length)
}