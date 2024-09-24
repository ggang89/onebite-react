//const moduleData= require("./math")

//구조분해로 받아오기
const { add, sub } = require("./math");

//console.log(moduleData)
//vsc 터미널에 node 경로(index.js or src/index.js)를 입력하면
// 터미널에서 바로 확인 가능

//console.log(moduleData.add(1, 2));
//console.log(moduleData.sub(1, 2));

console.log(add(2, 2));
console.log(sub(2, 2));