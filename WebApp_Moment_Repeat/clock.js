
const clockDiv = document.querySelector(".js-clock");
const clock = clockDiv.querySelector("h3");

function runClock(){
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    clock.innerText=`${hours<10?`0${hours}`:`${hours}`}:${minutes<10?`0${minutes}`:`${minutes}`}:${seconds<10?`0${seconds}`:`${seconds}`}`;

}//runClock() end

function init(){
    setInterval(runClock,1000);
}//init()end

init();