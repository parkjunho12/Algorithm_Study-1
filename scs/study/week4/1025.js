// https://verycrazy.tistory.com/108
// https://intrepidgeeks.com/tutorial/python-bozhun-1025-finding-square-numbers-to-solve-problems

const readline = require("readline")
 
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
})

let input = []

rl.on("line", line => input.push(line))

rl.on("close", () => {
	let answer = -1
	let [ n, m ] = input[0].split(" ").map(tableNumber => parseInt(tableNumber))
	input.shift()
	const arr = new Array(n).fill(0).map(() => new Array(m).fill(0))

	input.forEach((inputEle, inputIndex) => {
		inputEle.split("").forEach((eleNumber, eleIndex) => {
			arr[inputIndex][eleIndex] = eleNumber
		})
	})

	const isSqrtNumber = (sqrtNumber) => {
		const sqrt = parseInt(Math.sqrt(sqrtNumber))
		return sqrt * sqrt === sqrtNumber ? true : false
	}

	for(let r = 0; r < n; r++) { // 행
		for(let c = 0; c < m; c++) { // 열
			for(let i = -n; i < n; i++) { // 행 공차
				for(let j = -m; j < m; j++) { // 열 공차
					if(i === 0 && j === 0) continue
					let x = c
					let y = r
					let sqr = ""
					console.log("============== for ===============")
					console.log(r, c, i, j, x, y)
					while(0 <= x && x < m && 0 <= y && y < n) {
						sqr +=  arr[y][x]
						console.log("=============== sqr ==============")
						console.log(sqr)
						if(isSqrtNumber(Number(sqr))) {
							answer = Math.max(answer, Number(sqr))
						}
						x += j
						y += i
						console.log("=============== while ==============")
						console.log(r, c, i, j, x, y)
					}
				}
			}
		}
	}

	console.log("===== answer =====")
	console.log(answer)
})

