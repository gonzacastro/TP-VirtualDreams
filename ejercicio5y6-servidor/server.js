const request = require('request');
const express = require('express');
const bodyParser = require('body-parser');

//Creo app express
const app = express();

//Configuro express para usar body-parser
// como middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Defino el comportamiento al recibir un POST
app.post('/', (req, res) => {
    console.log('POST');
    //Extraigo la cantidad de valores que posee el JSON
    let cant = Object.values(req.body).length
    //Compruebo si hay hasta 3 valores, si es asi, paso a validarlos
    if (cant <= 3 && validateInput(req.body.apellido, req.body.dni, req.body.nombre)) {
        request.post('https://reclutamiento-14cf7.firebaseio.com/personas.json',
            {
                json: {
                    "nombre": req.body.nombre || "-",
                    "apellido": req.body.apellido,
                    "dni": req.body.dni
                }
            }, err => {
                if (err)
                    //Hubo error al postear
                    res.send('Status Code: 500');
                else
                    //Peticion exitosa 
                    //console.log(req);
                    res.send('Status Code: 201');
            }
        )
    }
    else {
        //Hubo error en los datos enviados por el cliente
        res.send('Status Code: 400');
    }
});

function validateInput(apellido, dni, nombre) {
    //console.log('Voy a validar');

    //Los campos dni y apellido son obligatorios
    if (dni && apellido) {
        //Los campos apellido y nombre tienen que ser strings
        if (!(/^[A-Za-z]+$/.test(apellido)))
            return false;
        if (nombre) {
            if(!(/^[A-Za-z]+$/.test(nombre)))
                return false;
        }

        let dniString = dni.toString();
        //El campo dni no puede exceder los 10 caracteres
        if (dniString.length > 10) 
            return false;

        //Todo verificado
        return true;
    } else
        return false;
}

//Se deja el servidor a la espera de peticiones
app.listen(3000, () => {
    console.log('Servidor listo, escuchando en puerto 3000...')
});
