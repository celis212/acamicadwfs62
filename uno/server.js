const express = require('express');
const bodyParser = require('body-parser');
const server = express();
server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());

// const server = express();

server.listen(3000, () => console.log('Servidor inicializado en el puerto 3000'));
const internalError = {
  code: 100,
  message: 'Error del lado del servidor'
}
const vendorError = {
  code: 101,
  message: 'Error del lado del proveedor del servicio'
}
const databaseError = {
  code: 102,
  message: 'No es posible conectar a la base de datos'
}
server.get("/usuarios", (request, response) => {
  response.status(504).send(databaseError)
})
server.post("/usuarios", (req, response) => {
  console.log(req.body.nombre)
  response.status(200).send();
})