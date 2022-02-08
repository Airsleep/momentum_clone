const API_KEY_WEATHER = "5daac65dfe5047adc43885eda6b332e2";

function onGeoSuccess(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  //   console.log("where you are is ", lat, lon);
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY_WEATHER}&units=metric`;
  //   console.log(url);
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp} / `;
    });
}

function onGeoError() {
  alert("Can't find location for give weather condition.");
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);
