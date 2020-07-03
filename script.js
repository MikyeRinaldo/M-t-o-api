const APIKEY = '050eef818ac314c1660a1b94b4a0defc';


let apiCall = function (city) {

    let url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}&units=metric&lang=fr`;

// les lignes en dessous placent les données dans les div du formulaire.
// cette fonction est appelée avec Apicall.
// la fonction city est intégrée das le lien de l'api donc elle est directement appelée.

    fetch(url).then((response ) => 
        response.json().then((data) => {
        console.log(data);

    document.querySelector('#city').innerHTML = data.name;
    document.querySelector('#temp').innerHTML = data.main.temp + " °";
    document.querySelector('#humidity').innerHTML = data.main.humidity + ' %';
    document.querySelector('#wind').innerHTML = data.wind.speed + " km/h";

        }).catch((error) => console.log('Erreur : ') + error));
};

    document.querySelector('.Gooo').addEventListener('submit', (e) =>
    e.preventDefault());
    let ville = document.querySelector('#inputCity').value;

    apiCall(ville);
    ;