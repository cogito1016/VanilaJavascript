const USER_ID_LS = "userId";
const userForm = document.querySelector(".js-userForm");
const userInp = userForm.querySelector("input");
userForm.addEventListener("submit",handleSubmit);

function showUserId(userId){
    userInp.classList.add("hide");
    const h2 = document.createElement("h2");
    h2.innerText = `Hello ${userId} welcome to this WebApp`;
    userForm.appendChild(h2);
}//showUserID() end

function saveUserId(){
    const userId = userInp.value;
    localStorage.setItem(USER_ID_LS,userId);
    showUserId(userId);
}//saveUserId() end

function handleSubmit(event){
    event.preventDefault();
    saveUserId();
}//handleSubmit() end

function loadUserId(){
    const userId = localStorage.getItem(USER_ID_LS);
    if(userId===null)
        alert("아이디를 입력해주셔야 기능 이용이 가능합니다");
    else{
        showUserId(userId);
    }//if~ else end
}//loadUserId() end

function init(){
    console.log("im born");
    loadUserId();

}//init() end

init();