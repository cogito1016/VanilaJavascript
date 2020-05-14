const form = document.querySelector(".js-form");
const input = form.querySelector("input");
const greeting = document.querySelector(".js-greetings");
//위처럼 하면 "h4"요소를 직접선택하는것과 달리 InnerText가 자동으로 지원되지않는다.(자동완성으로)
//그러나 결과저으로 h4를 가져오는것이 맞으므로, 자동완성으로 나오지않더라도
//InnerText로 제어할 수 있다.

const USER_LS = 'currentUser';
const SHOING_CN ="showing";

//로컬스트로지 vs 세션스토리지
//로컬스토리지는 유효기간이 영구적이며, 세션스토리지는 브라우저가 열려있는 기간동안만 유효하다.
//로컬스토리지는 key-val값쌍으로 이루어져있다.
//크롬개발자도구에서는 sotrage-localstorage에서 확인 가능하다
function saveName(text){
   localStorage.setItem(USER_LS,text); //setItem을 통해 로컬스토리지에 저장할 수 있음 
   //(객체의경우 Json.stringify()로 스트링으로 변환 후 보내주어야함)
   //만약 문자열로변환된 객체를 받고나서 다시 객체로 변환하고싶다면, Json.parse()로 변환가능
}//saveName() end

function handleSubmit(event){
    event.preventDefault(); //기본적으로 동작하는 제출동작을 막는다(url로 전송하여 리프레쉬하는)
    const currentValue = input.value; //InnerText는 파라미터를 포함하는 설정자, value는 파라미터가없는 접근자
    paintGreeting(currentValue);
    saveName(currentValue);
}//handleSubmit() end

function askForName(){
    form.classList.add(SHOING_CN);
    form.addEventListener("submit",handleSubmit);
}//askForName() end

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
    if(currentUser === null){// === 연산자는 강력한 비교연산자이다 같은'지료형'인가 같은'값'인가 까지 비교한다 
        //she is not
        askForName();
    }else{
        //she is
        paintGreeting(currentUser);
    }
}//loadName() end

function init(){
    loadName();
}//init() end

init();