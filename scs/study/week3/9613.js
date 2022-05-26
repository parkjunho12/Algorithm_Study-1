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
			// 테스트 케이스 배열
			const caseArr = input[i].split(" ").map(num => parseInt(num))
			const n = caseArr.shift()
			const gcdArr = []

			// 배열 내 각 값 최대공약수 구하기 위한 for문
			for(let j = 0; j < n; j++) {
					for(let k = j + 1; k < n; k++) { // j보다 +1값 부터 최대공약수 계산
						const gcd = getGCD(caseArr[j], caseArr[k])
						gcdArr.push(gcd)
					}
			}

      const gcdSum = gcdArr.reduce((acc, cur) => acc += cur, 0)
      console.log(gcdSum)
   }
})

// 유클리드 호제법 : 
// j를 k로 나눈 나머지를 r이라 하면(단, j > k), j와 k의 최대공약수는 k와 r의 최대공약수와 같다.
// 이 성질에 따라 나머지 구하는 과정을 반복하여 나머지가 0일 때 나누는 수(k)가 최대공약수
const getGCD = (j, k) => (j % k === 0 ? k : getGCD(k, j % k))