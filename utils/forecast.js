const request = require('postman-request');

const forecast = (latitude, longitude, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=7df65f182e786fdc5c114f1f5f1dc727&query=${latitude},${longitude}&units=m`;

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect the weather services...', undefined);
        } else if (body.error) {
            callback('Unable to find the location...', undefined);
        } else {
            const currentWeather = body.current;

            callback(undefined, `It is ${currentWeather.weather_descriptions[0].toLowerCase()} and currently ${currentWeather.temperature} degrees out. There is a ${currentWeather.precip}% chance of rain.`);
        }
    });
};

module.exports = forecast;