const rp = require('request-promise');
const url = 'https://reclutamiento-14cf7.firebaseio.com/personas.json';

//Indico la peticion que quiero realizar, y le doy formato JSON
rp({method: 'GET', uri: url, json: true})
    //Si se puede efectuar imprimo el archivo JSON por consola
    .then(response =>{
        console.log(response);
    //Caso contrario informo error
    }).catch(error =>{
        console.err(error)
    });