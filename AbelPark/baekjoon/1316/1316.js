const readline = require("readline")

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

let input = []

function groupWordChecker(val) {
  let result = 0
  val.shift()
  val.forEach((word) => {
    let splitLetter = word.split("")
    splitLetter.forEach((letter) => {
      let letterIndex = []
      let idx = splitLetter.indexOf(letter)
      while (idx != -1) {
        letterIndex.push(idx)
        idx = splitLetter.indexOf(letter, idx + 1)
      }
      if (letterIndex.length !== 1) {
        let i = 0
        while (i >= letterIndex.length) {
          if (letterIndex[i] - letterIndex[i + 1] > 1) {
            result = result + 1
          } else {
            i = i++
          }
        }
      } else {
      }
    })
  })
}

rl.on("line", (line) => {
  input.push(line)
})

rl.on("close", () => {
  groupWordChecker(input)
  process.exit()
})
