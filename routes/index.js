import express from 'express';
import clientes from './clientesRoutes.js';
import produtos from './produtosRoutes.js';

const routes = (app) => {
    app.route("/").get((req, res) => res.status(200).send("NODE JS APP"));

    app.use(express.json(), clientes);

    app.use(express.json(), produtos);
}

export default routes;