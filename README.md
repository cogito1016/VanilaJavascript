# VanilaJavascript
- - -
#### Javascript
- Javascript는 비동기언어
- 즉, 이전의 코드가 완전히 해결되지 않아도 이어지는 코드를 실행할 수 있다.


- - - 
###### Visual Studio Code - Javascript 실행
- extension > code runner 다운로드
- Ctrl + Alt + N

- - -
#### Object.keys() 
- 문자열, 배열 등 이터러블이 내장되어있으면 사용 가능
- 데이터를 순회하며 실행
- 객체의 순회가 필요할 때 사용하지만, for ... in 으로 대체 가능

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

#### every
- 모든 항목을 콜백으로 체크하여 true에 해당되면 true입니다.
- 모든 항목을 검사함.

#### reduce
- 배열의 길이와 데이터 형태를 모두 또는 각각 변경할 수 있다.
- 반드시 배열을 반환할 필요도 없다.

###### reduce 특징 +
- 콜백함수와 기본값을 전달한다, reduce(콜백함수, 기본값)
- 기본값은 옵셔널이나, 리듀스 반환값에 대한 단서를 제공한다. 따라서 기본적으로 넣어준다.
- reduce함수에 대해 중요한건, 콜백함수에서 항상 누적값을 반환해야한다는 점.
- 결과값은 어떤형식이든 가능하다, 배열,문자열,불,객체 등..
- 초기값이 함수에 전달된후에는 carry라고 부른다.
- 누적값을 반환하지않으면 값은 완전히 사라진다.


- - -
### 맵 이터레이터 
- 맵, 배열, 세트에 존재
- 맵을 직접 순회할 수 있게 해준다

#### for ... of 로 이터레이터를 사용할 수 있다
```javascript
for( const temp_variable of Map ){
    //temp_variable로 Map, Arr, Set 순회
}
```

#### for ... in 로 키-값 객체에서만 동작한다.
- Object.keys()없이 객체 순회 가능
```javascript
for( const idOrKey in Object){
    const value = Object.idOrKey;
}
```

- - -
### Parameter & Return

1. #### Default Parameter
- 코드가 늘어나도 요구사항이 변경되면, 함수의 매개변수도 달라질 수 있다.
- 매개변수가 추가된 경우, 기존 사용했던 함수들의 충돌을 피하기위해 defaultValue를 설정하게 된다.
- 한두개면 모를까 점점 늘어나게되면, 코드는 너무 지저분쓰.
- defaultParameter을 사용하여 처리

```javascript
function convertWeight(weight, ounces=0, roundTo=2)
```
- 다른 개발자에게 자료형의 정보를 제공할 수 있다.
- 그럴거면 타입스크립트를 쓰면 더 좋을듯

###### 한계점
- 매개변수의 순서가 중요하다.
- 온스추가를 안하고 라운드투만 입력하려면, convertWeight(10,0,8)과 같이 굳이 온스에 0을 입력해줘야 함


2. #### Destructuring Assignment (해체할당)
- 객체를 넘겨줄때 object.key과 같은 구문으로 변수에 할당을 하여 처리할 수 있다.
- 그 경우, 많은량의 코드를 변수할당에 쓰이게된다.
- 해체할당을 통해 이 부분을 생략할 수 있다.
- 추가로, 기본값 설정도 가능하다.
- 추가로, 나머지매개변수를 사용할 수 있다. (펼침연산자 ... 를 사용하여) (정보수집 때 사용하면 나머지매개변수라 칭한다)
- 매개변수의 순서를 신경쓰지않아도된다 (객체를 전달하므로)
- 키-값 할당 및 특정 키 제거 등 활용지점이 많다.

###### 해체할당은 배열에도 가능해요.
- 그러나 배열에는 키가없으므로, 순서에 맞게 할당해야한다.
```javascript
const [one,two] = arrName
```

###### 해체할당의 단점 = 배열에만 가능하다


- - -
### Arguments 객체
- 내장된 객체
- 함수에 전달된 모든 인수를 담은 배열과 유사한 객체
```javascript
function getArguments(){
    return arguments;
}
getArguments('Hello', 'World');
```
###### return [Arguments] { '0': 'Blood', '1': 'June' }

- arguments를 활용하여 인수 제한을 두지않는 방식은
1. 난해하다
2. 함수 매개변수로 인수목록을 받는다는 사실을 알기도 어렵다
3. 몸체를 살펴봐야 파악이된다

###### 인수제한을 두지않는 방식은 Arguments말고 나머지매개변수(펼침연산자)를 활용하자.

- 나머지 매개변수의 유일한 단점은, '언제나 마지막에 사용해야 한다'

- - -
### 테스트

#### Jest
###### 설치
- https://jestjs.io/docs/getting-started

1. npm install --save-dev jest
2. npm install --save-dev @types/jest 
3. VScode Extension - Jest
4. npm test

#### 스텁
- 

#### 모의객체
- 

#### 스파이
- 

- - -
#### Arrow Functio ( 화살표 함수 )


- - -
#### 고차함수
- 다른 함수를 반환하는 함수

##### 부분 적용 함수
- 일부 매개변수를 전달하면 해당 매개변수를 잠그는 함수가 반환되어 여기에 더 많은 매개변수를 사용할 수 있음
- 즉 부분 적용 함수를 사용하면 한 번에 전달해야 할 함수 인수의 수가 줄어드는 대신, 더 전달해야 하는 다른 함수를 반환한다.

```javascript
console.log(mergeProgramInformation(building, manager, program));
console.log(mergeProgramInformation(building,manager,exhibit));

```
1. 보내야하는 인수가 고정되었을 때, 반복해서 호출하게 된다.
2. 반복되는 인수는 외부함수로, 이 외부함수가 호출되면 program을 인수로 활용하는 함수를 반환하게 만들어야 한다.
3. 그렇다면 매개변수에 단일책임을 부여할 수 있게된다.

###### 그러나 여전히 반복적인 인수를 작성할 수 밖에 없다.
###### 이를 해결하기 위해선...

##### 커링과 배열메서드의 조합
1. 고차함수가 반환되면 바로 사용 할 필요가 없다. 
```javascript
//func1는 또 다른 함수를 반환하는 고차함수라 가정한다.
const func2 = func1(a,b)
```
2. 위의 경우, func2는 func1에 a,b라는 인수가 하드코딩된 함수가 되어 어디서든 호출가능하다.

###### 커링
- 한번에 인수를 하나만 받는 함수
- 하나의 인수만 전달하는 메서드를 다룰 때 매우 유용
- 자바스크립트는 완벽한 커링을 지원하지는 않지만,
- 부분적용을 이용하여 일련의 단일매개변수로 매개변수 숫자를 줄이는 방법이 일반적

- - -
#### Class
- 클래스가 나왔음에도 자바스크립트는 여전히 프로토타입 기반 언어
- class키워드를 사용
- new키워드로 인스턴스 생성
```javascript
class Coupon{
    
}
const coupon = new Coupon();
```

##### 생성자
- function키워드 없이 동작
- this를 사용하여 클래스에 속성 추가
- 생성자를 통해 인수를 받을 수 있음
```javascript
class Coupon{
    constructor(price, expiration){
        this.price = price;
        this.expiration = expiration || '2주';
    }
}
```