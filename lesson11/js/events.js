const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        //console.log(jsonObject);
        const towns = jsonObject['towns'];

        for (let i = 0; i < towns.length; i++) {
            if (towns[i].name == /* "Fish Haven" ||  towns[i].name == */ "Preston" /* || towns[i].name == "Soda Springs" */ ) {
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

//document.getElementsByClassName('events').textContent = jsonObject.towns.events[j];