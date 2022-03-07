import '../css/style.css';
import weatherCard from '../template/weather.hbs';
const container = document.querySelector('.weather-container');
const btn = document.querySelector('.show-weather');

btn.addEventListener('click', onClick);

function onClick() {
fetch(`http://api.weatherstack.com/current?access_key=b340a573bb4616ffe3ce4107b81f7805&query=Kill_Devil_Hills`)
  .then(res => res.json())
  .then((location) => {
    console.log(location);
    weatherPost(location)
  })
    .catch(error => console.log(error));
}


function weatherPost(location) {
  console.log(location);
  const markup = weatherCard(location);
  container.innerHTML = markup;
}

//   const axios = require('axios');


// axios.get('https://api.weatherstack.com/current', {params})
//   .then(response => {
//     const apiResponse = response.data;
//     console.log(`Current temperature in ${apiResponse.location.name} is ${apiResponse.current.temperature}℃`);
//   }).catch(error => {
//     console.log(error);
//   });

