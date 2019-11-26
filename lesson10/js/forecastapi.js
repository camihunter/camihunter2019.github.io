const weatherapiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=80308be28fe0d83661b5b1c7d8efff8f";

fetch(weatherapiURL)
    .then((response) => response.json())

    .then((jsObject) => {
        console.log(jsObject);

        document.getElementById('hightemp').textContent = jsObject.main.temp_max;
        document.getElementById('temp').textContent = jsObject.main.temp;
        document.getElementById('humidity').textContent = jsObject.main.humidity;
        document.getElementById('windspeed').textContent = jsObject.wind.speed;
        document.getElementById('description').textContent = jsObject.weather[0].main;
        let temp = document.getElementById('temp');
        let speed = document.getElementById('windspeed');
        const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon;
        const desc = jsObject.weather[0].description;
        windchill(temp.texContent, speed.textContent);
    });


function windChill(tempF, speed) {
    var windchilltemp;
    if (tempF <= 50 && speed > 3) {
        windchilltemp = 35.74 + (.6215 * tempF) - (35.75 * Math.pow(speed, .16)) + (.4275 * tempF * Math.pow(speed, .16));
        windchilltemp = Math.round(windchilltemp);
        document.getElementById('windchill').textContent = windchilltemp + "&deg";
        F;
    } else {
        windchilltemp = "N/A";
        document.getElementById('windchill').textContent = windchilltemp;
    }
     //console.log("Current Temp = " + tempF + ", Wind Speed = " + speed + ", Wind Chill = " + windchilltemp)
    console.log('windchilltemp');
}