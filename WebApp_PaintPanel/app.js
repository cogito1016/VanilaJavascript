const canvas = document.getElementById("jsCanvas");

let painting = false;

function stopPainting(){
    painting = false;
}

function onMouseMove(evnet){
    const x = event.offsetX;
    const y = event.offsetY;
}//onMouseMove() end

function onMouseDown(event){
    stopPainting();
}//onMouseDown() end

function onMouseUp(){
    stopPainting();
}//onMouseUp() end

function onMouseLeave(){
    stopPainting();
}//onMouseLeave()end 

if(canvas){
    canvas.addEventListener("mousemove",onMouseMove);
    canvas.addEventListener("mousedown",onMouseDown);
    canvas.addEventListener("mouseup",onMouseUp);
    canvas.addEventListener("mouseleave",onMouseLeave);
}//if end


function init(){

}//init() end

init();