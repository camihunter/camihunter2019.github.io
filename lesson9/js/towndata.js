const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
         console.table(jsonObject);
        const towns = jsonObject['towns'];
        for (let i = 0; i < towns.length; i++) {


            let card = document.createElement('section');
            let div = document.createElement('div');
            let h3 = document.createElement('h3');
            let motto = document.createElement('h4');
            let founded = document.createElement('p');
            let population = document.createElement('p');
            let rainfall = document.createElement('p');
            let image = document.createElement('img');

            if (towns[i].name == "Fish Haven" || towns[i].name=="Preston" || towns[i].name=="Soda Springs") {

                h3.textContent = towns[i].name;
                motto.textContent = towns[i].motto;
                founded.textContent = 'Year Founded: ' + towns[i].yearFounded;
                population.textContent = 'Population: ' + towns[i].currentPopulation;
                rainfall.textContent = 'Average Rainfall: ' + towns[i].averageRainfall + ' in';
                image.setAttribute('src', towns[i].photo);
                image.setAttribute('alt', towns[i].name + 'Idaho');
                card.appendChild(div);
                div.appendChild(h3);
                div.appendChild(motto);
                div.appendChild(founded);
                div.appendChild(population);
                div.appendChild(rainfall);
                card.appendChild(image);

                document.querySelector('div.cards').appendChild(card);
            }
        }
    });