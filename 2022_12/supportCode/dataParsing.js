//서로다른 이름, 나이, 색상이라는 속성들을 가지는 객체가 10개 들어있는 배열을 생성하는 함수
function createArrayOfObjects() {
  const array = [];
  for (let i = 0; i < 10; i++) {
    array.push({
      name: `name${i}`,
      age: i,
      color: `color${i}`,
    });
  }
  return array;
}

//crateArrayOfObjects 함수를 이용해 10개의 객체를 가진 배열을 생성
const array = createArrayOfObjects();

//배열의 각 요소를 순회하며 객체의 속성들을 출력하는 함수
function printObjectProperties(array) {
  array.forEach((object) => {
    console.log(`name: ${object.name}, age: ${object.age}, color: ${object.color}`);
  });
}

//printObjectProperties 함수를 이용해 배열의 각 요소의 속성들을 출력
printObjectProperties(array);
