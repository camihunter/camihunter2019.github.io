const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=80308be28fe0d83661b5b1c7d8efff8f";

fetch(apiURL)
  .then((response) => response.json())
  
  .then((jsObject) => {
    console.log(jsObject);
    document.getElementById('current-temp').textContent = jsObject.main.temp;
    document.getElementById('hightemp').textContent=jsObject.main.temp_max;
    document.getElementById('humidity').textContent=jsObject.main.humidity;
    document.getElementById('windspeed').textContent=jsObject.wind.speed;
    const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon;
    const desc = jsObject.weather[0].description;

  });