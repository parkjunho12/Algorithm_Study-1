// https://leylaoriduck.tistory.com/498

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
	const [m, n] = input
	let arr = []
	let answer = ""
	for(let i = 0; i <= n; i++) arr.push(true)
	arr[0] = false
	arr[1] = false
	
	for(let i = 2; i <= n; i++) {
		if(arr[i]) {
			for(let j = 2; j <= n / i; j++) arr[i * j] = false
		}
	}

	for(let i = m; i <= n; i++) {
		if(arr[i]) answer += i + "\n"
	}
	console.log(answer)
})