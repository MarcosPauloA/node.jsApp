const express = require('express');
const clientes = require('./clientesRoutes.js');
const produtos = require('./produtosRoutes.js');
const path = require('path');

const routes = (app) => {
    app.route('/').get((req, res) => res.status(200).sendFile(
        path.join(__dirname, '../views/index.html')));

    app.use(express.json(), clientes);

    app.use(express.json(), produtos);
};

module.exports = routes;
