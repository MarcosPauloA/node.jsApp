const express = require('express');
const clientes = require('./clientesRoutes.js');
const produtos = require('./produtosRoutes.js');
const usuarios = require('./usuariosRoutes.js');
const loginRouter = require('./login');
const logoutRouter = require('./logout');
const path = require('path');

const routes = (app) => {
    app.route('/').get((req, res) => res.status(200).sendFile(
        path.join(__dirname, '../views/index.html')));

    app.use(express.json(), loginRouter);
    app.use('/logout', logoutRouter);

    app.use(express.json(), clientes);

    app.use(express.json(), produtos);

    app.use(express.json(), usuarios);
};

module.exports = routes;
