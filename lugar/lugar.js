const axios = require('axios');
const getLugarLatLng = async(direccion) => {
    const encodeUrl = encodeURI(direccion);
    const instance = axios.create({
        baseURL: `http://api.openweathermap.org/data/2.5/weather?q=${encodeUrl}&appid=e49c625a0c309847c5765e3c63bcf015&units=metric`,
        headers: { 'appid': 'e49c625a0c309847c5765e3c63bcf015' }
    });
    const resp = await instance.get()
    if (resp.data.coord.length) {
        throw new Error("no hay resultados para esa direccion ");
    }
    const data = resp.data.main;
    const data2 = resp.data;
    const direc = data2.name;
    const temp = data.temp;
    const sensacion = data.feels_like;

    return {
        direc,
        temp,
        sensacion
    }
}
module.exports = {
    getLugarLatLng
}