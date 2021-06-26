const request = require('postman-request');

// Weatherstack

const url = 'http://api.weatherstack.com/current?access_key=7df65f182e786fdc5c114f1f5f1dc727&query=37.8267,-122.4233&units=m';

request({ url: url, json: true }, (error, response) => {
    if (error) {
        console.log('Unable to connect the weather services!');
    } else if (response.body.error) {
        console.log('Unable to find location.');
    } else {
        const currentWeather = response.body.current;
        console.log(`${currentWeather.weather_descriptions[0]}. It is currently ${currentWeather.temperature} degrees out. There is a ${currentWeather.precip}% chance of rain.`);
    }
});

// Mapbox

const urlGeocoding = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoieXVzYXNhcmlzb3kiLCJhIjoiY2tqcjU2bnA5MXJ6YjJ5dGZ5ajRvZHNrcSJ9.XRVbZzePRCNn9hzDaWvpyw&limit=1';

request({ url: urlGeocoding, json: true }, (error, response) => {
    if (error) {
        console.log('Unable to connect geocoding services!');
    } else if (response.body.message) {
        console.log('Unable to geocode location.');
    } else {
        const coordinates = response.body.features[0].center;
        console.log(`${coordinates[1]}, ${coordinates[0]}`);
    }
});