
//클로져란?
//이미 실행이 종료된 함수의 변수나 함수를 참조할 수 있는 링크를 가진 내부 함수

function outer(x){
    function inner(y){
        return x+y;
    }//inner() end
    return inner;
}//outer() end

const inner = outer(5) ; //y의 값이 없으므로 inner은 실행되지 않을것. 따라서 inner함수가 반환된다.
const result = inner(3); //위의 실행결과 x=5의 갑싱 담긴 inner가 반환되었으므로 3을 넣어준다면 3+5 = 8 의 결과를 반환
console.log(result);
