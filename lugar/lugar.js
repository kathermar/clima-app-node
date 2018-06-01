const axios = require('axios');



const getLugarLatLng = async(direccion) => {


    let encodeUrl = encodeURI(direccion);

    // le estamos diciendo espera a que esta peticion regrese, lo que sea que regrese
    // lo metes dentro de resp
    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeUrl}&key=AIzaSyCATSpWOUBzLLjKRMtVXb-8hzCakhO_0lg`)

    if (resp.data.status === 'ZERO_RESULTS') {

        throw new Error(`No hay resultados para la ciudad ${direccion}`);
    }


    let location = resp.data.results[0];
    let coors = location.geometry.location;

    /* console.log('Direccion', location.formatted_address);
     console.log('Lat', coors.lat);
     console.log('lng', coors.lng);
     //console.log(JSON.stringify(resp.data), undefined, 2);*/


    return {
        direccion: location.formatted_address,
        lat: coors.lat,
        lng: coors.lng
    }
}



//console.log(argv.direccion);

module.exports = {

    getLugarLatLng
}