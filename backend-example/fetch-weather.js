const fetch = require('node-fetch');

const endpoint = 'https://api.darksky.net/forecast';
const queryParams = '?exclude=[minutely, hourly, alerts, flags]&units=si';

const fetchWeather = (lalitude, longitude) => {
  const apiKey = process.env.API_KEY;

  const requestUrl = `${endpoint}/${apiKey}/${lalitude},${longitude}${queryParams}`;

  return fetch(requestUrl).then(response => response.json());
};

module.exports = fetchWeather;