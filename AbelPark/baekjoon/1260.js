var fs = require("fs")
var txt = fs.readFileSync("1260.txt").toString().split("\n")
var raw = txt
var data = []

for (let i = 0; i < raw.length; i++) {
  data[i] = raw[i].replace("\r", "").split(" ").map(Number)
}

var V = data[0][2]
var stack = [V]
var result = [V]
var flag = false

// 1. 정의 요소 제거
data.splice(0, 1)

// 2. 간선 연결값 정렬
// 2-1 2차원 배열간
data.forEach((D1) => {
  D1.sort()
})
// 2.2 1차원 배열간
data.sort((a, b) => a[0] + a[1] - (b[0] + b[1]))

// stack.push(V)
// result.push(V)

function DFS(p) {
  for (let i = 0; i < data.length; i++) {
    if (data[i].includes(p)) {
      if (data[i].indexOf(p) === 0) {
        result.push(data[i][1]), stack.push(data[i][1])
      } else {
        result.push(data[i][0]), stack.push(data[i][0])
      }
      data.splice(i, 1)
      flag = true
      console.log(stack)
      console.log(result)
      break
    } else {
      console.log("여긴안오냐")
      flag = false
    }
  }
  if (flag === false) {
    console.log(flag)
    stack.pop()
  }
  if (stack.length !== 0) {
    DFS(stack[stack.length - 1])
  }
}

DFS(V)

// for (let i = 0; i < data.length; i++) {
//   if (data[i].includes(V)) {
//     if (data[i].indexOf(V) === 0) {
//       result.push(data[i][1])
//       stack.push(data[i][1])
//     } else {
//       result.push(data[i][0])
//       stack.push(data[i][0])
//     }
//     data.splice(i, 1)
//     break
//   }
// }

console.log(data)
console.log("정점의 번호" + V)
console.log("스택" + stack)
console.log("탐색순서" + result)
