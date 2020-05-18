//선언부에 export 붙이기

//배열내보내기
export let months=['kim','lee','park'];

//상수내보내기
export const MODULES_BECAME_STANDARD_YEAR = 2015;

//클래스 내보내기 
export class User {
    constructor(name){
        this.name=name;
    }//cons end
}//class user end

/* 클래스나 함수를 내보낼때는 세미콜론을 붙이면 안된다.
    왜냐하면 export를 붙였다 해도 함수표현식이 되는것이 아니라 여전히 함수선언문이다.
*/

//선언부와 떨어진곳에 export 붙이기

function sayHi(user){
    alert(`Hello ${user}!`);
}//sayHi() end

function sayBye(user){
    alert(`Byue ${user}!`);
}//sayBye() end 

export {sayHi, sayBye};