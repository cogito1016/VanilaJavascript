

//this는 현재 객체이다.
//화살표함수는 고유의 this를갖지않는다.따라서 ㅗ이부의 this를 참조한다
//아래처럼 했을때, 화사룦함수는 자신의 this가 없으므로
//SayHi메소드의 this를 참조하는데 
//SayHi메소드의 this 즉, 현재객체는 user이다
//따라서 줜
let user = {
    firstName : "John",
    sayHi(){
        let i = ()=>{
            alert(this.firstName);
        };
        i();
    }//sayHi() end
}//user end

user.sayHi();