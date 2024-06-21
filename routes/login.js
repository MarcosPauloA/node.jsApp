const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const verifyJWT = require('../middlewares/authMiddleware');
/* Post login listing. */
router.post('/', function(req, res, next) {
    console.log(req.body);
    if (req.body.user === 'Gustavo' && req.body.password === '1234') {
        const secret = 'Backend-II'; // req.body.password;
        // Utilizar informação relacionada ao usuário
        const token = jwt.sign({id: 1}, secret, {expiresIn: 300});
        return res.json({auth: true, token});
    }
    res.status(401).end();
});

// Rota protegida
router.get('/users', verifyJWT, function(req, res, next) {
    console.log(req.id + ' fez esta requisição!');
    res.send('respond with a resource');
});

module.exports = router;
