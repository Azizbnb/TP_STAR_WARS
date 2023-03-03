// Récupérer le nombre de personnes : 82
// Déduire le nombre de pages : 82 / 10 = 9

//récuperer toutes les personnes grace a une boucle
    //Realiser 9 fois : recuperation de 10 planètes

// Afficher les 82 personnes récuperer 

onInit();


function onInit() {
    getPeople();
    getPlanet();
    getVehicle();
}


async function getPeople() {
    let response = await fetch("https://swapi.dev/api/people/")
    response = await response.json();
    const people = document.querySelector('.card-1');
    const field = document.createElement('span');
    field.textContent = response.count;
    people.appendChild(field);
}

async function getPlanet() {
    let response = await fetch("https://swapi.dev/api/planets/")
    response = await response.json();
    const planet = document.querySelector('.card-3');
    const field = document.createElement('span');
    field.textContent = response.count;
    planet.appendChild(field);
}

async function getVehicle() {
    let response = await fetch("https://swapi.dev/api/vehicles/")
    response = await response.json();
    const vehicle = document.querySelector('.card-2');
    const field = document.createElement('span');
    field.textContent = response.count;
    vehicle.appendChild(field);
}

