// 입력값 세팅
var fs = require("fs")
var txt = fs.readFileSync("1260.txt").toString().split("\n")
var raw = txt
var data = []
for (let i = 0; i < raw.length; i++) {
  data[i] = raw[i].replace("\r", "").split(" ").map(Number)
}

// 로직 풀이
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
// 2-2 1차원 배열간
data.sort((a, b) => a[0] + a[1] - (b[0] + b[1]))

// 2-3 2차원 배열 중첩 !제거 할필요 없음!
// let data = data.filter((element, index) => {
//   return (
//     //1차원 배열에서는 indexOf를 사용했지만 다차원 배열에서는 안먹힘
//     data.findIndex((item) => item[0] === element[0] && item[1] === element[1]) === index
//   )
// })
function DFS(p) {
  for (let i = 0; i < data.length; i++) {
    if (data[i].includes(p)) {
      if (data[i].indexOf(p) === 0) {
        if (result.includes(data[i][1]) === false) {
          result.push(data[i][1])
          stack.push(data[i][1])
        }
      } else {
        if (result.includes(data[i][0]) === false) {
          result.push(data[i][0])
          stack.push(data[i][0])
        }
      }
      data.splice(i, 1)
      flag = true
      break
    }
  }
  if (flag === false) {
    stack.pop()
  }
  if (stack.length !== 0) {
    flag = false
    DFS(stack[stack.length - 1])
  }
}

function BFS(p) {
  let i = 0
  while (data.length > i) {
    if (data[i].includes(p)) {
      if (data[i].indexOf(p) === 0) {
        if (result.includes(data[i][1]) === false) {
          result.push(data[i][1])
          stack.push(data[i][1])
        }
      } else {
        if (result.includes(data[i][0]) === false) {
          result.push(data[i][0])
          stack.push(data[i][0])
        }
      }
      data.splice(i, 1)
      flag = true
    } else {
      i++
    }
  }
  if (flag === false) {
    stack.shift()
  }
  if (stack.length !== 0) {
    flag = false
    BFS(stack[0])
  }
}

// DFS(V)
BFS(V)

console.log("정점의 번호" + V)
console.log("스택" + stack)
console.log("탐색순서" + result)

console.log(result.toString().replace(",", " "))
