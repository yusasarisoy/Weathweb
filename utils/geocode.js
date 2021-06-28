const request = require('postman-request');

const geocode = (address, callback) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1IjoieXVzYXNhcmlzb3kiLCJhIjoiY2tqcjU2bnA5MXJ6YjJ5dGZ5ajRvZHNrcSJ9.XRVbZzePRCNn9hzDaWvpyw&limit=1`;

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect the location services...', undefined);
        } else if (body.features.length === 0) {
            callback('Unable to find the location that you entered...', undefined);
        } else {
            const addressInformation = body.features[0];

            callback(undefined, {
                latitude: addressInformation.center[1],
                longitude: addressInformation.center[0],
                location: addressInformation.place_name
            });
        }
    });
};

module.exports = geocode;