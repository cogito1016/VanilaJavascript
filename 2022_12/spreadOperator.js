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