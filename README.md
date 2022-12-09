# VanilaJavascript

- - - 
###### Visual Studio Code - Javascript 실행
- extension > code runner 다운로드
- Ctrl + Alt + N

- - -
#### Object.keys() 
- 문자열, 배열 등 이터러블이 내장되어있으면 사용 가능
- 데이터를 순회하며 실행

- - -
#### Includes로 존재여부 확인
- 배열의 값의 위치 확인하지 않고 존재 여부 확인하는 방법
- indexOf로 시도 시, 0위치에 있다면 거짓으로 판명되는 한계점 존재

- - -
#### 펼침연산자
- 펼침연산자 : ...
- 배열(또는 배열)에 포함된 항목을 목록으로 바꿔줌
- 함수의 파라미터에 나머지연산자로도 사용

##### 배열을 다룰 때 원본조작 금지
- 예측 불가능한 코드를 야기하기 때문
- 실제로 Redux와 같은 라이브러리는 원본조작을 허용하지 않는다.
- 함수 호출시에는 함수에 전달한 값을 변경하지 않을거라는 신뢰가 필요 = '순수함수'
- 정렬함수 sort를 사용할때에는 사본으로 정렬하여 사용

###### 원본조작함수(원본조작X함수) : splice(slice), push(펼침연산자로 대체), 

- - -
#### Object.Asign()을... 굳이사용해야하나? 펼침연산자로 해결
- 조작없이 객체 생성
- 객체 펼침연산자는 작성할 코드가 크게 줄어든 Object.assign()과 같음
- 그러니까 그냥 펼침연산자 활용해라
- return {...defaultObject, ...updatedObject}
- 동일한 키에 서로 다른값을 추가하면 어떤값이든 가장 마지막에 선언된 값을 사용한다.

###### 그러나 중첩객체의 문제가 있다.
- Object.assign()을 사용하든, 객체펼침연산자를 사용하든 중첩된 객체를 다루면 값복사가아닌 참조복사가 일어난다.

###### 참조복사의 경우
```javascript
const employee = {
    ...defaultEmployee,
    name:{
        ...defaultEmployee.name,
    }
}
```

- - -
### 삼항연산자
- 간단한 분기는 삼항연산자로 단순하게
- 복잡한 분기는 함수로 처리

### 단락평가로 효율성 극대화
- value? value : notValue 라면,
- value || notvalue 로 활용

###### 이게 가능한이유 ?
1. ||연산자의 경우 연산자 왼쪽의 값만 true여도 true이다.
2. 언어입장에서 연산자 왼쪽값이 true결과인데, 굳이 true를 반환하지 않아도된다.
3. 따라서, 언어입장에서는 그냥 연산자 왼쪽의 값을 반환한다.

###### 삼항연산자와 마찬가지로, 단순할때만 사용
###### 가독성이 우선이다.

- - -
### 화살표함수로 단순하게
- 자바스크립트 has so many 콜백함수
- 콜백함수 많으면 꼴배기싫음
- 화살표함수로 극복가능
- 함수작성을 간결하고 짧게

###### 콜백함수
- 콜백함수는 다른함수의 매개변수로 전달

###### 화살표함수
- function키워드 불필요
- 인수감싸는 괄효 불필요
- return 키워드 불필요
- 중괄호 불필요
근데 불필요한것들은 때에 따라 달라요~ 필요할수도 있음   


- - -
### 배열메서드
- for, for...of 문도 좋다 
- 그러나 어수선하다
- 배열메서드 최대한 활용

#### find
- for + break에 대체됨
- 1,2,3 개의 요소가 한 배열에 있을 때, 2번을 찾고자 for문을 사용하고 break로 빠져나오는 경우와 같음
- 그럴때 2를 반환하고 3으로는 가지않음.
- 일치되는 항목 없을 때undefined 반환