
//IIFE ==> 즉시 실행되는 함수

//모듈패턴은 IIFE와 같이 사용되는 경우가 있다.

var stories ='Medium Story';

var medium = (function(){
    var stories = ['a','b','c'];
    return { 
        getStories:()=>stories
    }
})//return function

console.log(stories);
// console.log(medium.stories);
// console.log(medium.getStories());
//예시로는 위처럼나와있으나 실행안됨. 
console.log(medium().stories); //stories는 함수의 스코프 안에 존재하는 변수이므로 접근 불가능
console.log(medium().getStories()); //getStories만을 이용하여 stories를 가져올 수 있다.

