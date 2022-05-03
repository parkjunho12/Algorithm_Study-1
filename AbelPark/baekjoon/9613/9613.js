const readline = require("readline")

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

let input = []

function GCD(a, b) {
  const remainder = a % b
  if (remainder === 0) return b
  return GCD(b, remainder)
}

function solution(array) {
  array.shift()
  array.sort()
  let result = 0
  for (let j = 0; j < array.length - 1; j++) {
    for (let i = j + 1; i < array.length; i++) {
      result = result + GCD(array[j], array[i])
    }
  }
  console.log(result)
}

rl.on("line", (line) => {
  input.push(line.split(" ").map((el) => parseInt(el)))
})

rl.on("close", () => {
  input.shift()
  input.forEach((element) => {
    solution(element)
  })
  process.exit()
})
