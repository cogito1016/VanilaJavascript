const clockContainer = document.querySelector(".js-clock"),
clockTitle = clockContainer.querySelector("h1"); 
//h1요소를 선택할때는 clockTitle.일때 innerText가 나타남
//그러나 js-title클래스선택자를 사용할때는 innerText가 나타나지않음

function getTime(){
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const second = date.getSeconds();
    clockTitle.innerText = `${hours}:${minutes}:${second}`; //백틱을 사용하여 좀더 이쁘게
}//getTime() end

function init(){
    
    getTime();
}//init() end

init();