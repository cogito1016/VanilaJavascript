const clockForm = document.querySelector(".jsClock");
const clockLabel = clockForm.querySelector("h1");

function runClock(){
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    clockLabel.innerText = `${hours<10?`0${hours}`:`${hours}`}:${minutes<10?`0${minutes}`:`${minutes}`}:${seconds<10?`0${seconds}`:`${seconds}`}`;
    
}//runClock() end

function init(){
    runClock();
    setInterval(runClock,1000);
}//init() end

init();

