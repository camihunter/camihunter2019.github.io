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
        windChill(temp.textContent, speed.textContent);
    });

/*const forecastAPI = "https://api.openweathermap.org/data/2.5/forecast?id=" + townID + "&units=imperial&APPID=80308be28fe0d83661b5b1c7d8efff8f";
fetch(forecastAPI)
    .then((response) => response.json())
    .then((jsObject) => {
            //console.log(jsObject);
*/


            function windChill(temp, speed) {
                var windchilltemp = 0;
                if (temp <= 50 && speed > 3) {
                    windchilltemp = 35.74 + (.6215 * temp) - (35.75 * Math.pow(speed, .16)) + (.4275 * temp * Math.pow(speed, .16));
                    windchilltemp = Math.round(windchilltemp);
                    document.getElementById('windchill').innerHTML = windchilltemp + "&#176;F";;
                } else {
                    windchilltemp = "N/A";
                    document.getElementById('windchill').textContent = windchilltemp;
                }
                console.log("Current Temp = " + temp + ", Wind Speed = " + speed + ", Wind Chill = " + windchilltemp)
                console.log('windchilltemp');
            };