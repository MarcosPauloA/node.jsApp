import express from 'express';
import ProdutosController from '../controllers/produtoController.js';

const routes = express.Router();

routes.get('/produtos', ProdutosController.listarProdutos);

routes.get('/produtos/:id', ProdutosController.listaProdutoPorId);

routes.put('/produtos/:id', ProdutosController.putProduto);

routes.post('/produtos', ProdutosController.postProduto);

routes.delete('/produtos/:id', ProdutosController.removeProduto);

export default routes;
