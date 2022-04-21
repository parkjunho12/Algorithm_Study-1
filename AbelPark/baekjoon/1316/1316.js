const readline = require("readline")

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

let input = []

function groupWordChecker() {
  console.log(input)
}

rl.on("line", (line) => {
  input.push(line)
  groupWordChecker(input)
})

rl.on("close", () => {
  console.log(input)
  process.exit()
})
