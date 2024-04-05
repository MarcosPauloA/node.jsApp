const express = require('express');
const ProdutosController = require('../controllers/produtoController.js');
const ProdutoMiddleware = require('../middlewares/produtoMiddleware.js');

const routes = express.Router();

routes.get('/produtos', ProdutosController.listarProdutos);

routes.get('/produtos/:id', ProdutosController.listaProdutoPorId);

routes.put('/produtos/:id', ProdutosController.putProduto);

routes.post('/produtos', ProdutoMiddleware.validateName,
    ProdutoMiddleware.validateDescription,
    ProdutoMiddleware.validatePrice, ProdutosController.postProduto);

routes.delete('/produtos/:id', ProdutosController.removeProduto);

module.exports = routes;

