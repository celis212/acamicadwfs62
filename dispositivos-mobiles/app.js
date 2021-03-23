//traemos librerias 
const express = require('express');
const bodyParser = require('body-parser');
const { request } = require('express');

//configuramos el servicio 
const app = express();
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
app.listen(3000, () => console.log('servidor inicializado en el puerto 3000'));

//lista de dispositivos 
const devices = [
    {
        marca: "iPhone",
        modelo: "12",
        pantalla: 9,
        sistema_operativo: "iOS",
        precio: 1000
    },
    {
        marca: 'Sansumg',
        modelo: "Galaxy x10",
        pantalla: 9,
        sistema_operativo: 'Android',
        precio: 9000
    }
]

//endpoint para el listado de dispositvos mobiles 
app.get('/device', (request, response) => {
    response.status(200).send(devices);
})

//endpoint para insertar un nuevo dispositivo
app.post('/device', (request, response) => {
    console.log(request.body)
    const {
        marca, 
        modelo, 
        pantalla,
        sistema_operativo, 
        precio
    } = request.body;
    if(
        typeof(marca) === 'string' &&
        typeof(modelo) === 'string' &&
        typeof(pantalla) === 'number' &&
        typeof(sistema_operativo) === 'string' &&
        typeof(precio) === 'number' 
    ) {
        //insertamos el nuevo elemento en el array de dispositivos 
        devices.push({
            marca: marca,
            modelo: modelo,
            pantalla: pantalla,
            sistema_operativo: sistema_operativo,
            precio: precio
        })

        response.status(200).send(devices)
    } else{
        response.status(406).send('error en los tipos de datos')
    }
    //console.log(marca);
    //response.status(202).send();
})



//endpoint para actualizar los dispositivos 
app.put('/device/:index', (request, response) => {
    const index = parseInt(request.params.index);
    if(typeof(index) === 'number'){
        const {
            marca, 
            modelo, 
            pantalla,
            sistema_operativo, 
            precio
        } = response.body;

        if(
            typeof(marca) === 'string' &&
            typeof(modelo) === 'string' &&
            typeof(pantalla) === 'number' &&
            typeof(sistema_operativo) === 'string' &&
            typeof(precio) === 'number' 
        ) {
            devices[index].marca = marca;
            devices[index].modelo = modelo;
            devices[index].pantalla = pantalla;
            devices[index].sistema_operativo = sistema_operativo;
            devices[index].precio = precio;
            
            console.log(index);
            response.status(200).send(devices);
        }else{
            response.status(406).send('error en los tipos de datos')
        }
    }
    
})

//endpoint para actualizar los dispositivos 
app.delete('/device', (request, response) => {

})

//endpoint para actualizar los dispositivos 
app.use('/device', (request, response) => {

})

//midleware para validar URLs inexistentes 
app.use((request, response, next) => {
    response.status(404).send('URL no encontrada ')
})