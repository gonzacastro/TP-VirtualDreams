const rp = require('request-promise');
const url = 'https://reclutamiento-14cf7.firebaseio.com/personas.json';

rp({method: 'GET', uri: url, json: true})
    .then(response =>{
        console.log(response);
    }).catch(error =>{
        console.err(error)
    });