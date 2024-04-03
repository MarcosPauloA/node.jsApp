const express = require('express');
const clientes = require('./clientesRoutes.js');
const produtos = require('./produtosRoutes.js');

const routes = (app) => {
    app.route('/').get((req, res) => res.status(200).send('NODE JS APP'));

    app.use(express.json(), clientes);

    app.use(express.json(), produtos);
};

module.exports = routes;
