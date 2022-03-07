const express = require('express');
const cors = require('cors');
const fetchWeather = require('./fetch-weather');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 4040;

app.use(cors('*'));

app.get('/weather', (req, res) => {
  const { lat, lon } = req.query;

  if (!lat || !lon) {
    res.json({
      message: 'request url must include lat and lon parameters'
    });
    return;
  };

  fetchWeather(lat, lon)
    .then(weather => res.status(200).json(weather))
    .catch(error => res.status(400).json({ message: error }));
});

app.listen(PORT, () => {
  console.log('Server is running on port ', PORT);
});
