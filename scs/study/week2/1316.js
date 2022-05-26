const readline = require("readline")

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
})

let input = []

rl.on("line", line => input.push(line))
rl.on("close", () => groupWord(input))

const groupWord = input => {
	const caseCount = Number(input[0])
	let countGroupWord = 0

	for(let i = 1; i <= caseCount; i++) {
		const word = input[i]
		const letter = []
		let flagGroupWord = true
		console.log(`--- word : ${word} ---`)

		for(let j = 0; j < word.length; j++) {
			if(letter.indexOf(word[j]) === -1) {
				// letter 배열 안에 word[j] 단어 하나도 포함 안하는 경우
				letter.push(word[j])
			} else {
				// letter 배열 안에 word[j] 있을때
				console.log(j, word[j], letter.indexOf(word[j]), letter[letter.length - 1], letter.length - 1)
				if(letter.indexOf(word[j]) !== letter.length - 1) { // 단어 연속해서 안나오는 경우
					flagGroupWord = false
					break
				}
			}
		}
		
		if(flagGroupWord) countGroupWord += 1
	}

	console.log(countGroupWord)
}