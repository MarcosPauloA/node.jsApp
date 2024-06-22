const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const verifyJWT = require('../middlewares/authMiddleware');
const UserController = require('../controllers/userController');
const cache = require('../configs/cache.js');
/* Post login listing. */
router.post('/', async function(req, res, next) {
    console.log(req.body);
    try {
        const listaUsuarios = await UserController.retornarUsuarios();
        for (let i = 0; i < listaUsuarios.length; i++) {
            if (req.body.user === listaUsuarios[i].usuario &&
                req.body.password === listaUsuarios[i].senha) {
                const secret = process.env.TOKEN_SECRET;
                // Utilizar informação relacionada ao usuário
                const token = jwt.sign(req.body.user, secret);
                // Salva os dados no cache com uma duração de 30 segundos
                cache.set('token', token);
                return res.json({message: 'Logged in successfully! 🎉' });
            }
            res.status(401).end();
        }
    } catch (error) {
        console.error('Error fetching user data:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Rota protegida
router.get('/usuarios', verifyJWT, function(req, res, next) {
    console.log(req.id + ' fez esta requisição!');
    res.send('respond with a resource');
});

module.exports = router;
