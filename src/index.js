//1-1.const moduleData= require("./math")
//console.log(moduleData)
//vsc 터미널에 node 경로(index.js or src/index.js)를 입력하면
// 터미널에서 바로 확인 가능

//console.log(moduleData.add(1, 2));
//console.log(moduleData.sub(1, 2));

//1-2.구조분해로 받아오기
//const { add, sub } = require("./math");

//2.ES 모듈로 가져오기
import mul, { add, sub } from "./math.js"; //확장자(.js)까지 붙여야함!
//default로 내보낸 것은 {중괄호}없이 import 가능하고 이름도 바로 변경가능

console.log(add(2, 2));
console.log(sub(2, 2));
console.log(mul(2, 3));
