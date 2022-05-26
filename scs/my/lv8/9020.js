// https://velog.io/@hadam/JS-%EB%B0%B1%EC%A4%80-9020-%EA%B3%A8%EB%93%9C%EB%B0%94%ED%9D%90%EC%9D%98-%EC%B6%94%EC%B8%A1

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
	const min = 2
	const max = 10000
	let prime = []
	for(let i = min; i <= max; i++) {
		prime[i] = i
	}
	
	for(let i = min; i <= max; i++) {
		if(prime[i] !== 0) {
			for(let j = 2; j <= max / i; j++) {
				prime[i * j] = 0
			}
		}
	}
	prime = prime.filter(num => num && num)
	
	input.forEach(inputNumber => {
		if(inputNumber % 2 === 0) {
			let answer = []
			for(let j = 0; prime[j] <= inputNumber / 2; j++) {
				console.log(j, prime[j])
				const index = prime.indexOf(inputNumber - prime[j])
				console.log(index, prime[index])
				if(index !== -1) answer.push([prime[j], prime[index]])
			}
			
			if(answer.length !== 0) {
				const last = answer.pop()
				console.log(`${last[0]} ${last[1]}`)
			}
		}
	})
})