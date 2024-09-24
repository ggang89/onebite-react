function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

//모듈 내장객체에 exports라는 프로퍼티의 값으로 객체를 저장해줌
//객체 안에 프로퍼티로 내보내고 싶은 값들을 넣어줌
//사용하고 싶은 모듈에서 require 내장함수를 이용해서 불러와서 사용가능
module.exports = {
  add: add,
  sub,
  //sub:sub와 같음 
  //=> value값으로 사용되는 변수의 이름과 키값이 같을경우, 변수나 함수명만 써도 됨
  
}