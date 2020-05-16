const greetingForm = document.querySelector(".jsGreeting");
const greetingTitle = greetingForm.querySelector("h3");
const greetingInp = greetingForm.querySelector("input");

const USERID_LS = "userId";

console.log(greetingInp.value);

function showUserId(getId){
    console.log(greetingInp.classList);
    greetingInp.classList.toggle("hide");
    greetingTitle.classList.toggle("hide");
    greetingTitle.innerText=`Hello ${getId} Nice to meet you`;
}//showUserId() end

function loadUserId(){
    const getId = localStorage.getItem(USERID_LS);
    if(getId===null){
        alert("유저아이디를 입력해주셔야겠는데요");
    }else{
        showUserId(getId);
    }//if~else end 
}//loadUserId() end

function saveUserId(){
    localStorage.setItem(USERID_LS,greetingInp.value);
}//saveUserId() end

function handleSubmitGreeting(event){
    event.preventDefault();
    saveUserId();
}//handleSubmitGreeting() end

function init(){
    greetingForm.addEventListener("submit",handleSubmitGreeting);
    loadUserId();
}//init() end

init();