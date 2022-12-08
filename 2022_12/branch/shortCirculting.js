let value = "3";

//Value값이 있으면 Value값, 없으면 "없음"을 할당할 때

//삼항연산자를 활용할 때
let result; 
result = value? value : "없음";
console.log(result);

//단락평가를 활용할 때
result = value||"없음";
console.log(result);