/**
 * @description Função de autenticação de jsonwebtoken
 * @param {obj} req
 * @param {obj} res
 * @param {obj} next
 */
function verifyJWT(req, res, next) {
    // console.log(req.headers['x-access-token']);
    const SECRET = process.env.TOKEN_SECRET;
    const token = req.headers['x-access-token'];
    jwt.verify(token, SECRET, (err, decoded) => {
        console.log(decoded);
        if (err) return res.status(401).end();
        req.id = decoded.id;
        next();
    });
}

module.exports = verifyJWT;
