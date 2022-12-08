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
#### 펼침연산자로 배열을 본떠라
- 펼침연산자 : ...
- 배열에 포함된 항목을 목록으로 바꿔줌
- 함수의 파라미터에 나머지연산자로도 사용

##### 배열을 다룰 때
1. 원본조작 금지
- 예측 불가능한 코드를 야기하기 때문
- 원본조작O 함수 : splice
- 원본조작X 함수 : slice

