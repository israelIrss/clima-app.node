const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'direccion de la ciudad de donde se quiere optener el clima',
        demand: true
    }
}).argv;
const lugar = require('./lugar/lugar');

const getinfo = async(direccion) => {
    try {
        const clima = await lugar.getLugarLatLng(direccion);
        return `la temperatura de ${clima.direc} es de ${clima.temp} con una sensacion termica de ${clima.sensacion}`;
    } catch (e) {
        return e;
    }
}
getinfo(argv.direccion)
    .then(console.log)
    .catch(console.log);