const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.log(jsonObject);
        const towns = jsonObject['towns'];
        const eventsarray = jsonObject['towns[i].events']
        for (let i = 0; i < towns.length; i++) {
            for (let j = 0; j < eventsarray.length; j++) {

                let event = document.createElement('p');

                if (towns[i].name == /* "Fish Haven" ||  towns[i].name == */ "Preston" /* || towns[i].name == "Soda Springs" */ ) {



                    event.textContent = eventsarray[j];
                    console.log(event);
                }

                document.querySelector('div.events').appendChild(event);
            }
        }
    });

//document.getElementsByClassName('events').textContent = jsonObject.towns.events[j];