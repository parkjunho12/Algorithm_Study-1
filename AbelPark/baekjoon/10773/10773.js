const readline = require("readline")

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

let input = []

function solution(array) {
  array.shift()
  let bundle = []
  for (let i = 0; i < array.length; i++) {
    if (Number(array[i]) === 0) {
      bundle.pop()
    } else {
      bundle.push(Number(array[i]))
    }
  }
  if (bundle.length === 0) {
    console.log(0)
  } else {
    console.log(
      bundle.reduce((sum, currValue) => {
        return sum + currValue
      })
    )
  }
}

rl.on("line", (line) => {
  input.push(line)
})

rl.on("close", () => {
  solution(input)
  process.exit()
})
