/**
 * 이름, 나이, 키, 몸무게 속성을 갖는 클래스
 */
class Person {
    constructor(name, age, height, weight) {
        this.name = name;
        this.age = age;
        this.height = height;
        this.weight = weight;
    }
}

/**
 * 서로 다른 이름, 나이, 키, 몸무게 속성을 가지는 객체가 10개 들어있는 배열을 생성하는 함수
 */
function createArrayOfObjects() {
    const array = [];
    for (let i = 0; i < 10; i++) {
        array.push(new Person(`name${i}`, i, i, i));
    }
    return array;
}

/**
 * createArrayOfObjects 함수를 이용해 10개의 객체를 가진 배열을 생성
 */
const array = createArrayOfObjects();

//array변수를 json형태로 변환하여 파일로 저장
const fs = require('fs');
fs.writeFileSync('./array.json', JSON.stringify(array));
