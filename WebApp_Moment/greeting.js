const form = document.querySelector(".js-form");
const input = form.querySelector("input");
const greeting = document.querySelector(".js-greetings");
//위처럼 하면 "h4"요소를 직접선택하는것과 달리 InnerText가 자동으로 지원되지않는다.(자동완성으로)
//그러나 결과저으로 h4를 가져오는것이 맞으므로, 자동완성으로 나오지않더라도
//InnerText로 제어할 수 있다.

const USER_LS = 'currentUser';
const SHOING_CN ="showing";

function paintGreeting(text){
    //해당 요소객체에 .classList를 통해 클래스리스트에 접근할 수 있다.
    //Jquery에서의 .addClass .removeClass와 동일
    //.hasClass는 확인결과 contains로 확인가능할 것 이다.
    //결과적으로 class 'List' 니까 contains를 사용가능한듯
    form.classList.remove(SHOING_CN);
    greeting.classList.add(SHOING_CN);
    greeting.innerText = `Hello ${text}`;
}//paintGreeting() end

function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null){
        //she is not
    }else{
        //she is
        paintGreeting(currentUser);
    }
}//loadName() end

function init(){
    loadName();
}//init() end

init();