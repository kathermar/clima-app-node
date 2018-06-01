const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({

    direccion: {
        alias: 'd',
        desc: 'direccion de laciudad para obtener el clima',
        demand: true
    }
}).argv;


let getInfo = async(direccion) => {

    try {
        let coors = await lugar.getLugarLatLng(direccion);
        let temp = await clima.getClima(coors.lat, coors.lng);

        return `El clima en ${coors.direccion} es de ${temp} `;
    } catch (e) {
        return `no se pudo determinar el clima de ${direccion}`;
    }
}


getInfo(argv.direccion)
    .then(mensaje => console.log(mensaje))
    .catch(e => console.log(e));
/*
lugar.getLugarLatLng(argv.direccion)
    .then(resp => {
        console.log(resp);
    })
    .catch(e => console.log(e));


clima.getClima(9.9312927, -69.61549819999999)
    .then(temp => console.log(temp))
    .catch(e => console.log(e));*/