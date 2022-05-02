// var fs = require("fs")
// var txt = fs.readFileSync("1260.txt").toString().split("\n")
// var raw = txt
// var data = []
// for (let i = 0; i < raw.length; i++) {
//   data[i] = raw[i].replace("\r", "").split(" ").map(Number)
// }
let array = [10, 20, 30, 40]
let arrayBundle = []

function GCD(num) {
  let i = 1
  let quotient = []
  for (let i = 1; i <= Math.floor(num / 2); i++) {
    if (num % i === 0) {
      quotient.push(i)
    }
  }
  return quotient
}

array.forEach((ele) => {
  arrayBundle.push(GCD(ele))
})

let aa = arrayBundle[0].filter((x) => arrayBundle[1].includes(x))
let rr = Math.max(...aa)
