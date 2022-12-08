# VanilaJavascript

- - - 
* Visual Studio Code - Javascript 실행
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
- 배열에 포함된 항목을 목록으로 바꿔줌
- 함수의 파라미터에 나머지연산자로도 사용

##### 배열을 다룰 때 원본조작 금지
- 예측 불가능한 코드를 야기하기 때문
- 실제로 Redux와 같은 라이브러리는 원본조작을 허용하지 않는다.
- 함수 호출시에는 함수에 전달한 값을 변경하지 않을거라는 신뢰가 필요 = '순수함수'
- 정렬함수 sort를 사용할때에는 사본으로 정렬하여 사용

* 원본조작함수(원본조작X함수) : splice(slice), push(펼침연산자로 대체), 
