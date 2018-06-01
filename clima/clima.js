const axios = require('axios');


const getClima = async(lat, lng) => {

    // let encodeUrl = encodeURI(lat, lng);

    let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=91cb14762d932dca7f461dae39cd7960`)

    return resp.data.main.temp;

}


module.exports = {

    getClima
}