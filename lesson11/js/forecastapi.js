/*function townforecast ()
const id = "";

switch (city) {
    case "Preston Idaho":
        id = "5604473";
        break;
    case "Fish Haven Idaho":
        id = "5445439";
        break;
    case "Soda Springs Idaho":
        id = "5678757";
        break;
}
console.log(id);
*/
//const weatherapiURL = "https://api.openweathermap.org/data/2.5/weather?" + id + "&units=imperial&APPID=80308be28fe0d83661b5b1c7d8efff8f";
const weatherapiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=80308be28fe0d83661b5b1c7d8efff8f";

fetch(weatherapiURL)
    .then((response) => response.json())

    .then((jsObject) => {
        //console.log(jsObject);

        document.getElementById('hightemp').textContent = jsObject.main.temp_max.toFixed(0);
        document.getElementById('temp').textContent = jsObject.main.temp.toFixed(0);
        document.getElementById('humidity').textContent = jsObject.main.humidity;
        document.getElementById('windspeed').textContent = jsObject.wind.speed.toFixed(0);
        document.getElementById('description').textContent = jsObject.weather[0].main;
        let temp = document.getElementById('temp');
        let speed = document.getElementById('windspeed');
        const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon;
        const desc = jsObject.weather[0].description;
        windChill(temp.textContent, speed.textContent);
    });

const forecastapiURL = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=80308be28fe0d83661b5b1c7d8efff8f";
fetch(forecastapiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        //console.log(jsObject);


        for (let i = 0; i < jsObject.list.length; i++) {
            if (jsObject.list[i].dt_txt.includes('18:00:00')) {
                let options = {
                    weekday: 'short'
                };
                let weekday = document.createElement('th');
                let weathericon = document.createElement('img');
                let rowdata = document.createElement('td');

                weathericon.setAttribute('src', 'https://openweathermap.org/img/w/' + jsObject.list[i].weather[0].icon + '.png');
                weathericon.setAttribute('alt', jsObject.list[i].weather[0].description)
                weekday.textContent = new Date(jsObject.list[i].dt_txt).toLocaleDateString('en-US', options);
                rowdata.textContent = jsObject.list[i].main.temp.toFixed(0) + " &#176;F";
                rowdata.appendChild(weathericon);

                //console.log('https://openweathermap.org/img/w/' + jsObject.list[i].weather[0].icon + '.png')
                //console.log(jsObject.list[i].main.temp.toFixed(0))
                document.querySelector('.tablehead').appendChild(weekday);
                //document.querySelector('.tabledata').appendChild(weathericon);
                document.querySelector('.tabledata').appendChild(rowdata);
            }
        }
    });


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
    //console.log("Current Temp = " + temp + ", Wind Speed = " + speed + ", Wind Chill = " + windchilltemp)
    //console.log('windchilltemp');
};
