//array.json 파일을 읽어와서 객체로 변환
const fs = require('fs');
const array = JSON.parse(fs.readFileSync('./array.json'));

//배열의 각 요소를 순회하며 객체의 속성들을 출력하는 함수
function printObjectProperties(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(`name: ${array[i].name}, age: ${array[i].age}, height: ${array[i].height}, weight: ${array[i].weight}`);
    }
}

//printObjectProperties 함수를 이용해 배열의 각 요소의 속성들을 출력
printObjectProperties(array);
