import express from 'express';
import ClienteController from '../controllers/clienteController.js';
import ClienteMiddleware from '../middlewares/clienteMiddleware.js';

const routes = express.Router();

routes.get('/clientes', ClienteController.listarClientes);

routes.get('/clientes/:id', ClienteController.listaClientePorId);

routes.put('/clientes/:id', ClienteController.putCliente);

routes.post('/clientes', ClienteMiddleware.validateName,
    ClienteMiddleware.validateFamilyName,
    ClienteMiddleware.validateAge,
    ClienteController.postCliente);

routes.delete('/clientes/:id', ClienteController.removeCliente);

export default routes;
