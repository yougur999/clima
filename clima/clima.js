const axios = require('axios');

const getClima = async(lat, lng) => {
    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=ded9c2646df8217215500808b2af5a19`)
    return resp.data.main.temp;
}

module.exports = {
    getClima
}