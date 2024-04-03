const express = require('express');
const ClienteController = require('../controllers/clienteController.js');
const ClienteMiddleware = require('../middlewares/clienteMiddleware.js');

const routes = express.Router();

routes.get('/clientes', ClienteController.listarClientes);

routes.get('/clientes/:id', ClienteController.listaClientePorId);

routes.put('/clientes/:id', ClienteController.putCliente);

routes.post('/clientes', ClienteMiddleware.validateName,
    ClienteMiddleware.validateFamilyName,
    ClienteMiddleware.validateAge,
    ClienteController.postCliente);

routes.delete('/clientes/:id', ClienteController.removeCliente);

module.exports = routes;
