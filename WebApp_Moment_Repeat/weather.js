
const WEATHER_LS = "weather"

function saveWeather(weatherObj){
    localStorage.setItem(WEATHER_LS,JSON.stringify(weatherObj));
}//saveWeather() end

function loadLoc(){
    const geoObj = navigator.geolocation.getCurrentPosition(
    function success(position){
        const lat=position.coords.latitude;
        const lon=position.coords.longitude;
        const weatherObj = {
            lat,
            lon
        };
        saveWeather(weatherObj);
    },function error(){
        alert("위치정보를 불러오지못했습니다")
    });
    
}//loadLoc() end

function loadWeather(){
    loadLoc();
}//loadWeathe() end

function init(){
    loadWeather();
}//init() end

init();