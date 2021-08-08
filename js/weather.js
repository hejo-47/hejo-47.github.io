// user 위치와 그 지역의 날씨를 알려줌.
const API_KEY = "94b92ffcd122789774576e50e04acfff";
function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    
    const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url).then(response => response.json()).then(data => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:nth-child(2)");
        const temp = document.querySelector("#weather span:last-child");

        city.innerText = data.name;
        weather.innerText = data.weather[0].main;
        temp.innerText = Math.ceil(data.main.temp);
    }); // JavaScript 가 url 을 부름.
}

function onGeoError() {
    alert("Can't find you. No Weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);