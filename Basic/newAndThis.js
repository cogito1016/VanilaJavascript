

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

// user.sayHi();


// function makeUser() {
//     return {
//         name: "John",
//         ref: this//여기에 바로 this를 써주는것은 makeUser의 this를 참조하는것이다.
//     };
// }//makeUser() end
  
// let user = makeUser();
// alert( user.ref.name ); // 결과가 어떻게 될까요?



// let calculator = {
//     // ... 여기에 답안 작성 ...
//     a:0,
//     b:0,
//     read(){
//         let tempA, tempB;
//         this.a=parseInt(prompt("숫자를 입력해주세요 두개",0));
//         this.b=parseInt(prompt("숫자를 입력해주세요 두개",0));
//     },
//     sum(){
//         return(this.a+this.b);
//     },
//     mul(){
//         return(this.a*this.b);
//     }
//   };
//   calculator.read();
//   alert( calculator.sum() );
//   alert( calculator.mul() );

// let ledder = {
//     step:0,
//     up(){
//         this.step++;
//         return this;
//     },
//     down(){
//         this.step--;
//         return this;
//     },
//     showStep(){
//         alert(this.step);
//     }
// }

// ledder.up().up().down().showStep();

// let obj = new Object(); 
// function A() { 
//     return obj;
//  }
// function B() {
//     return obj;
//  }
// let a = new A;
// let b = new B;
// alert( a == b ); // true

// function Calculator(){

//     this.read =function(){ 
//         this.a=parseInt(prompt("숫자입력",0)); 
//         this.b=parseInt(prompt("숫자입력",0)); 
//     };
//     this.sum = function(){ return (this.a+this.b);}
//     this.mul = function(){ return (this.a*this.b);}
    
// }//Calculator() end

// let calculator = new Calculator();
// calculator.read();

// alert( "Sum=" + calculator.sum() );
// alert( "Mul=" + calculator.mul() );

function Accumulator(int){
    this.value=int;
    this.read = function(){ this.value+=parseInt(prompt("값",0));}
}//Acccumulator( )end

let accumulator = new Accumulator(1); // 최초값: 1

accumulator.read(); // 사용자가 입력한 값을 더해줌
accumulator.read(); // 사용자가 입력한 값을 더해줌

alert(accumulator.value); // 최초값과 사용자가 입력한 모든 값을 더해 출력함


