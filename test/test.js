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
//QuerySelector는 좀 더 $("#")같다. ByClassName과 ById와 다르게 선택자의 표식까지 해주어 구분을한다.
const title2 = document.querySelector("#title");

console.log(title);
title.innerHTML="Hi From JS ";
console.log(title.innerHTML);

//console.dir은 모든 해당 객체가 가지는 모든 속성들을 보여준다.
//따라서 dir을 통해 해당 HTML의 객체에서 어떤 속성을 제어할 수 있는지 알 수 있다.
console.dir(title);

// . 키워드를통해 객체가가지는 속성에 접근
title.style.color='red';
document.title="안녕 ";

//자바스크립트는 위에처럼 HTML과 CSS를 다루기 위해서만 만들어진것이 아님
//이벤트에 대응하기 위해 만들어짐 click resize submit . . .

function handleResize(event){//event는 이벤트리스너의 콜백함수에 자동적으로 붙여지는 이벤트객체 이다
    console.log("I have been resized"+ event);
}//handleResize end

//윈도우에 리사이즈 이벤트가발생하면 handleResize함수가 실행된다.
window.addEventListener("resize",handleResize);

function handleClick(){
    title.style.color='white';
}//handleClick end

title.addEventListener("click",handleClick);