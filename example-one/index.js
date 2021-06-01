// const express = require('express');
// const bodyParser = require('body-parser');

// const server = express();
// server.use(bodyParser.urlencoded({ extended: false }));
// server.use(bodyParser.json());

// apartir de una nueva actualizacion de puede escribir de la suguiente manera
// Librerías
const express = require('express');
// Configuración del server con express
const server = express();
server.use(express.json());
server.listen(3000);
// Middleware para ejecutarse antes del request
const global = (req, res, next) => {
  if(req.query.usuario === '1') {
    next();
  }
  else {
    res.status(401).send('Usuario incorrecto')
  }  
}
server.use(global);
const particular = (req, res, next) => {
  if(!req.query.query1) {
    res.status(402).send('Se necesita que venga el query param llamado query1')
  }
  else{
    next();
  }
}
// Endpoint para traer el usuario
server.get('/usuarios', particular, (req, res) => {
  res.send('Efrain Pardo')
})
server.get('/pedidos', (req, res) => {
  res.send('Esta es la lista de pedidos!!')
})