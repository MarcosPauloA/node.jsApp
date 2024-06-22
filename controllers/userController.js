const { getAllUsers, getUserById, instertUser,
    updateUser, deleteUser } =
    require('../services/usersTransactions.js');
const jwt = require('jsonwebtoken');
/**
 * @description Classe responsavel para encaminhar as requisicoes para o bd
 */
class UserController {
    /**
    * @description Recebe requisicao get e busca todos os usuarios
    * @param {object} req
    * @param {object} res
    */
    static async listarUsuarios (req, res) {
        try {
            const listaUsuarios = await getAllUsers();

            res.status(200).json(listaUsuarios);
        } catch (erro) {
            res.status(500).json({ message: erro.message});
        }
    }
    /**
* @description Recebe requisicao get e busca todos os usuarios
* @param {object} req
* @param {object} res
*/
    static async retornarUsuarios (req, res) {
        try {
            const listaUsuarios = await getAllUsers();

            return listaUsuarios;
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
    static async listaUsuarioPorId (req, res, next) {
        try {
            const id = req.params.id;
            const usuarioEncontrado = await getUserById(id);
            if (JSON.stringify(usuarioEncontrado) != '[]') {
                res.status(200).json(usuarioEncontrado);
            } else {
                res.status(404).send({message: 'Usuario não encontrado'});
            }
        } catch (erro) {
            next(erro);
        }
    }
    /**
     * @description Modifica usuario com novoNome
     * @param {object} req
     * @param {object} res
     */
    static async putUsuario (req, res) {
        try {
            const id = req.params.id;
            const novoNome = req.body.nome;
            updateUser(id, novoNome);
            res.status(200).json('Cliente atualizado com sucesso');
        } catch (erro) {
            res.status(500).json({message: erro.message});
        }
    }
    /**
     * @description Insere novo usuário
     * @param {object} req
     * @param {object} res
     */
    static async postUsuario (req, res) {
        try {
            const token = jwt.sign(req.body.usuario, process.env.TOKEN_SECRET);
            instertUser(req.body.usuario, req.body.senha, token);
            res.status(201).send('Usuário cadastrado com sucesso!');
        } catch (erro) {
            res.status(500).json({message: erro.message});
        }
    }
    /**
     * @description Busca e delete o usuário de id igual do BD
     * @param {object} req
     * @param {object} res
    */
    static async removeUsuario (req, res) {
        try {
            const id = req.params.id;
            deleteUser(id);

            res.status(200).send('Usuário removido com sucesso!');
        } catch (erro) {
            res.status(500).json({ message: erro.message });
        }
    }
}

module.exports = UserController;
