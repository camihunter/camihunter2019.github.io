/* -------------Current Conditions---------------*/
const weatherapiURL = "https://api.openweathermap.org/data/2.5/weather?id=5445439&units=imperial&APPID=80308be28fe0d83661b5b1c7d8efff8f";

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

/* -------------Five Day Forecast---------------*/
const forecastapiURL = "https://api.openweathermap.org/data/2.5/forecast?id=5445439&units=imperial&APPID=80308be28fe0d83661b5b1c7d8efff8f";
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
                rowdata.textContent = jsObject.list[i].main.temp.toFixed(0) + "\u00B0";
                rowdata.appendChild(weathericon);


                document.querySelector('.tablehead').appendChild(weekday);
                document.querySelector('.tabledata').appendChild(rowdata);
            }
        }
    });


/* -------------Windchill---------------*/
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
};


/* -------------Upcoming Events---------------*/
const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        //console.log(jsonObject);
        const towns = jsonObject['towns'];

        for (let i = 0; i < towns.length; i++) {
            if (towns[i].name == "Fish Haven") {
                const eventsarray = towns[i].events;
                let eventbox = document.createElement('ul');

                for (let j = 0; j < eventsarray.length; j++) {
                    let events = document.createElement('li');
                    events.textContent = eventsarray[j];
                    eventbox.appendChild(events);
                    //console.log(events);
                }

                document.querySelector('div.events').appendChild(eventbox);
            }
        }
    });

