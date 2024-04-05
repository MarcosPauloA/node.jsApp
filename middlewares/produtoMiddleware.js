/**
 * @description Classe responsavel para validar os dados do produto
 */
class ProdutoMiddleware {
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
    * @description Funcao responsavel por validar a descricao
    * @param {object} request
    * @param {object} response
    * @param {object} next
    * @return {object}
    */
    static validateDescription (request, response, next) {
        const { body } = request;
        if (body.descricao == undefined) {
            return response.status(400)
                .json({ message: 'O campo "descricao" é obrigatório' });
        }
        if (body.descricao === '') {
            return response.status(400)
                .json({ message: 'O campo "descricao" não pode ser vazio' });
        }
        next();
    };

    /**
    * @description Funcao responsavel por validar o preco
    * @param {object} request
    * @param {object} response
    * @param {object} next
    * @return {object}
    */
    static validatePrice (request, response, next) {
        const { body } = request;
        if (body.preco == undefined || body.preco === '') {
            return response.status(400)
                .json({ message: 'O campo "preco" é obrigatório' });
        }
        if (isNaN(parseFloat(body.preco))) {
            return response.status(400)
                .json({ message: 'O campo "preco" deve ser ' +
                'um numero real' });
        }
        next();
    };
}

module.exports = ProdutoMiddleware;
