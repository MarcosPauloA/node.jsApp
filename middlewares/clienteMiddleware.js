const cache = require('../configs/cache.js');
const jwt = require('jsonwebtoken');
/**
 * @description Classe responsavel para validar os dados do cliente
 */
class ClienteMiddleware {
/**
 * @description Função de autenticação de jsonwebtoken
 * @param {obj} req
 * @param {obj} res
 * @param {obj} next
 * @return {obj} res
 */
    static verifyJWT(req, res, next) {
        console.log(req);
        // console.log(req.headers['x-access-token']);
        const SECRET = process.env.TOKEN_SECRET;
        const token = cache.get('token');
        if (token !== undefined) {
            jwt.verify(token, SECRET, (err, decoded) => {
                console.log(decoded);
                if (err) return res.status(401).end();
                req.id = decoded.id;
                next();
            });
        } else {
            return res.status(401).end();
        }
    }
    /**
    * @description Funcao responsavel por validadar o nome
    * @param {object} request
    * @param {object} response
    * @param {object} next
    * @return {object}
    */
    static validateName (request, response, next) {
        const { body } = request;
        if (body.nome == undefined) {
            return response.status(400)
                .json({ message: 'O campo "nome" é obrigatório' });
        }
        if (body.nome === '') {
            return response.status(400)
                .json({ message: 'O campo "nome" não pode ser vazio' });
        }
        next();
    };

    /**
    * @description Funcao responsavel por validar o sobrenome
    * @param {object} request
    * @param {object} response
    * @param {object} next
    * @return {object}
    */
    static validateFamilyName (request, response, next) {
        const { body } = request;
        if (body.sobrenome == undefined) {
            return response.status(400)
                .json({ message: 'O campo "sobrenome" é obrigatório' });
        }
        if (body.sobrenome === '') {
            return response.status(400)
                .json({ message: 'O campo "sobrenome" não pode ser vazio' });
        }
        next();
    };

    /**
    * @description Funcao responsavel por validar a idade
    * @param {object} request
    * @param {object} response
    * @param {object} next
    * @return {object}
    */
    static validateAge (request, response, next) {
        const { body } = request;
        if (body.idade == undefined || body.idade === '') {
            return response.status(400)
                .json({ message: 'O campo "idade" é obrigatório' });
        }
        if (isNaN(parseInt(body.idade)) ||
        parseInt(body.idade) < 0 || parseInt(body.idade) > 130) {
            return response.status(400)
                .json({ message: 'O campo "idade" deve ser ' +
                'inteiro positivo e valor possível' });
        }
        next();
    };
    /**
 *
 * @param {object} req
 * @param {object} res
 * @param {object} next
 */
    static async cacheMiddleware(req, res, next) {
        // Usando a URL como chave de cache
        const chave = req.originalUrl;
        // Tenta obter os dados do cache
        const dadosCache = cache.get(chave);

        if (dadosCache !== undefined) {
            // Envia a resposta com os dados do cache, se existirem
            console.log('Dados recuperados do cache para a URL:', chave);
            res.send(dadosCache);
        } else {
            // Continua com a próxima função de middleware
            console.log('Dados não encontrados no cache para a URL:', chave);
            next();
        }
    }
}

module.exports = ClienteMiddleware;
