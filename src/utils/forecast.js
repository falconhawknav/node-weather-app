const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/fa713f2b04f8bd81d893cafe16f87a03/' + latitude + ',' + longitude;
    request({url, json: true}, (error, { body }) => {
        if(error) {
            callback('Unable to connect to weather service!', undefined)
        } else if(body.error){
            callback('Unable to find location', undefined)
        } else {
            const {temperature, precipProbability, timezone, summary, humidity} = body.currently;
            callback(undefined, {
                temperature,
                precipProbability,
                location: timezone,
                humidity,
                summary
            })
        }
    })

}

module.exports = forecast