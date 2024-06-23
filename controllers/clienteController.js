const { getAllClientes, getClienteById, instertCliente,
    updateCliente, deleteCliente } =
    require('../services/clientesTransactions.js');

const cache = require('../configs/cache.js');

/**
 * @description Classe responsavel para encaminhar as requisicoes para o bd
 */
class ClienteController {
    /**
    * @description Recebe requisicao get e busca todos os clientes
    * @param {object} req
    * @param {object} res
    */
    static async listarClientes (req, res) {
        try {
            const listaClientes = await getAllClientes();

            // Salva os dados no cache com uma duração de 30 segundos
            cache.set(req.originalUrl, listaClientes, 30);

            res.status(200).json(listaClientes);
            // res.render('clientes', {listaClientes: listaClientes});
        } catch (erro) {
            res.status(500).json({ message: erro.message});
        }
    }
    /**
     * @description Recebe requisicao de get com parametro id
     * @param {object} req
     * @param {object} res
     * @param {object} next
     */
    static async listaClientePorId (req, res, next) {
        try {
            const id = req.params.id;
            const clienteEncontrado = await getClienteById(id);
            if (JSON.stringify(clienteEncontrado) != '[]') {
                // Salva os dados no cache com uma duração de 30 segundos
                cache.set(req.originalUrl, clienteEncontrado, 30);

                res.status(200).json(clienteEncontrado);
            } else {
                res.status(404).send({message: 'Cliente não encontrado'});
            }
        } catch (erro) {
            next(erro);
        }
    }
    /**
     * @description Modifica cliente com novoNome
     * @param {object} req
     * @param {object} res
     */
    static async putCliente (req, res) {
        try {
            const id = req.params.id;
            const novoNome = req.body.nome;
            updateCliente(id, novoNome);

            // Deleta o cache para que seja atualizado
            cache.flushAll();

            res.status(200).json('Cliente atualizado com sucesso');
        } catch (erro) {
            res.status(500).json({message: erro.message});
        }
    }
    /**
     * @description Insere novo cliente
     * @param {object} req
     * @param {object} res
     */
    static async postCliente (req, res) {
        try {
            instertCliente(req.body.nome, req.body.sobrenome,
                req.body.email, req.body.idade);

            // Remove o cache de clientes para que seja atualizado
            cache.flushAll();

            res.status(201).send('Cliente cadastrado com sucesso!');
        } catch (erro) {
            res.status(500).json({message: erro.message});
        }
    }
    /**
     * @description Busca e delete o cliente de id igual do BD
     * @param {object} req
     * @param {object} res
    */
    static async removeCliente (req, res) {
        try {
            const id = req.params.id;
            deleteCliente(id);

            // Deleta o cache para que seja atualizado
            cache.flushAll();

            res.status(200).send('Cliente removido com sucesso!');
        } catch (erro) {
            res.status(500).json({ message: erro.message });
        }
    }
}

module.exports = ClienteController;
