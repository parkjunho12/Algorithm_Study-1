const readline = require("readline")
 
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
})

let input = []

rl.on("line", line => input.push(line))

rl.on("close", () => {
   const t = parseInt(input.shift())
   for(let i = 0; i < t; i++) {
      const caseArr = input[i].split(" ").map(num => parseInt(num))
      const n = caseArr.shift()
      const gcdArr = []

      for(let j = 0; j < n; j++) {
         for(let k = j + 1; k < n; k++) {
            const gcd = getGCD(caseArr[j], caseArr[k])
            gcdArr.push(gcd)
         }
      }

      const gcdSum = gcdArr.reduce((acc, cur) => acc += cur, 0)
      console.log(gcdSum)
   }
})

const getGCD = (j, k) => (j % k === 0 ? k : getGCD(k, j % k))