import { getAllClientes, getClienteById, instertCliente,
    updateCliente, deleteCliente } from '../models/clientesTransactions.js';
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
            res.status(200).json(listaClientes);
        } catch (erro) {
            res.status(500).json({ message: erro.message});
        }
    }
    /**
     * @description Recebe requisicao de get com parametro id
     * @param {object} req
     * @param {object} res
     */
    static async listaClientePorId (req, res) {
        try {
            const id = req.params.id;
            const clienteEncontrado = await getClienteById(id);
            res.status(200).json(clienteEncontrado);
        } catch (erro) {
            res.status(500).json({ message: erro.message });
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
            res.status(200).send('Cliente removido com sucesso!');
        } catch (erro) {
            res.status(500).json({ message: erro.message });
        }
    }
}

export default ClienteController;
