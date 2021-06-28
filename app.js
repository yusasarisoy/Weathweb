const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

const location = process.argv[process.argv.length - 1];

if (!location) {
    console.log('Please provide a location...');
} else {
    geocode(location, (error, { latitude, longitude, location } = {}) => {
        if (error) {
            return console.log('Error:', error);
        }

        forecast(latitude, longitude, (error, forecastData) => {
            if (error) {
                return console.log('Error:', error);
            }

            console.log(location);
            console.log(forecastData);
        });
    });
}