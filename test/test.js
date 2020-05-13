//let은 가변(변수)
//const는 불변(상수)
//필요할때만 let을 쓰고 필요하지않을때(기본으로)는 
//const를 쓰는 습관을 들이자

// ''도 스트링이고 ""도 스트링이다
//백틱이라는 개념이 있다.
// `Hello ${name} you are ${age} years old` 이렇게 쓸 수 있다.
//MVC패턴에서 View로 보내준 Model을 사용할때를 보는것같다.


//자바스크립트는 HTML을 객체로 가져올 수 있다.
//Okay Jquery에 있던 $("#")이다. 명령어는 더 길지만 다 가볍고 빠르다.
const title = document.getElementById("title");
console.log(title);
title.innerHTML="Hi From JS ";
console.log(title.innerHTML);
