// 파일 입력받고
const fs = require("fs").readFileSync("dev/stdin")
// 공백으로 배열처리(split)
let input = fs.toString().split(" ")
// 문자 공백 제거(trim)
input = fs.toString().trim()
// 줄바꿈
input = fs.toString().split("\n")