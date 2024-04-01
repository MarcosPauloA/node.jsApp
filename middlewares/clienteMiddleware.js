/**
 * @description Classe responsavel para validar os dados do cliente
 */
class ClienteMiddleware {
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
    * @description Funcao responsavel por validar o sobrenome
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
}

export default ClienteMiddleware;
