const clockContainer = document.querySelector(".js-clock"),
clockTitle = clockContainer.querySelector("h1"); 
//h1요소를 선택할때는 clockTitle.일때 innerText가 나타남
//그러나 js-title클래스선택자를 사용할때는 innerText가 나타나지않음

function getTime(){
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const second = date.getSeconds(); // 그런데 그냥 이렇게하면 01 02 가 아니라 1 2 로 나오다가 10이된다.
    //그러면 요소의 크기가 늘어나기도하며, 짤릴수도있게된다.
    //그래서 아래 코드에 삼항연산자로 해결해주었다. (백틱자꾸쓰니까 너무이쁜것같다)
    clockTitle.innerText = `${hours<10?`0${hours}`:hours}:${minutes<10?`0${minutes}`:minutes}:${second<10?`0${second}`:second}`; //백틱을 사용하여 좀더 이쁘게
}//getTime() end

function init(){
    setInterval(getTime,1000); //setInterval 사용 1000 = 1초 (밀리세컨드임)
}//init() end

init();