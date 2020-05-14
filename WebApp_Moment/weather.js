const COORDS = 'coords';

function saveCoords(coordsObj){
    localStorage.setItem(COORDS,JSON.stringify(coordsObj));
}//saveCoords() end

function handleGeoSuccess(position){
    const latitude = position.coords.latitude;
    const longtitude = position.coords.longtitude;
    const coordsObj ={
        latitude,
        longtitude
    };
    saveCoords(coordsObj);
    console.log(coordsObj);
}//handleGeoSuccess() end

function handleGeoError(){
    console.log("CAN'T ACCESS");
}//handleGeoError() end

function askForCoords(){ 
    //geolocation에서 getCurrentPosition을 통해 현재위치 객체를 얻어올 수 있다.
    //그리고 두 가지 경우가있는데 첫번째 파라미터는 success일 경우 두번째 파라미턴는 error일 경우이다.
    navigator.geolocation.getCurrentPosition(handleGeoSuccess,handleGeoError);
    
}//askForCoords end

function loadCoords(){
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords===null){
        askForCoords();
    }else{
        //getWeather
    }//if~ else end
}//loadCOords() end

function init(){
    loadCoords();
}//init() end

init();