//펼침연산자

//1.배열 요소 제거 시
let arr = [1,2,3,4,5];

let target= 3;

function getArrExceptTarget(arr, target){
    let index = arr.indexOf(target);
    return [...arr.slice(0,index), ...arr.slice(index+1, arr.length)];
}

console.log(getArrExceptTarget(arr,target));

//2.함수 인수로 전달 시 (나머지 연산자)
let book = ["타짜","김경식씨","12,000"]

function formatBook(title, author, price){
    return `${title}의 작가는 ${author}이며 ${price}원이다`;
}

console.log(formatBook(...book));

//3.Push대신 펼침연산자 처리
let members = ['a','b','c'];
console.log(['d',...members]);
console.log(members);

//4.Sort시 사본사용(펼침연산자)
let numbers = [1,4,2,3];

console.log('Sort Test ---')
console.log([...numbers].sort());
console.log(numbers);
console.log(numbers.sort());
console.log(numbers);
