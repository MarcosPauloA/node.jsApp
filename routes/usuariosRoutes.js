const express = require('express');
const UserController = require('../controllers/userController.js');

const routes = express.Router();

routes.get('/usuarios',
    UserController.listarUsuarios);

routes.get('/usuarios/:id', UserController.listaUsuarioPorId);

routes.put('/usuarios/:id', UserController.putUsuario);

routes.post('/usuarios',
    UserController.postUsuario);

routes.delete('/usuarios/:id', UserController.removeUsuario);

module.exports = routes;
