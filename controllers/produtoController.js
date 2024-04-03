const { getAllProdutos, getProdutoById,
    insertProduto, updateProduto, deleteProduto } =
    require('../models/produtosTransactions.js');

/**
 * @description Classe responsavel para encaminhar as requisicoes para o bd
 */
class ProdutoController {
    /**
    * @description Recebe requisicao get e busca todos os produtos
    * @param {object} req
    * @param {object} res
    */
    static async listarProdutos (req, res) {
        try {
            const listaProdutos = await getAllProdutos();
            res.status(200).json(listaProdutos);
        } catch (erro) {
            res.status(500).json({ message: erro.message});
        }
    }
    /**
     * @description Recebe requisicao de get com parametro id
     * @param {object} req
     * @param {object} res
     */
    static async listaProdutoPorId (req, res) {
        try {
            const id = req.params.id;
            const produtoEncontrado = await getProdutoById(id);
            res.status(200).json(produtoEncontrado);
        } catch (erro) {
            res.status(500).json({ message: erro.message });
        }
    }
    /**
     * @description Modifica produto com novoNome
     * @param {object} req
     * @param {object} res
     */
    static async putProduto (req, res) {
        try {
            const id = req.params.id;
            const novoNome = req.body.nome;
            updateProduto(id, novoNome);
            res.status(200).json('Produto atualizado com sucesso');
        } catch (erro) {
            res.status(500).json({ message: erro.message });
        }
    }
    /**
     * @description Insere novo produto
     * @param {object} req
     * @param {object} res
     */
    static async postProduto (req, res) {
        try {
            insertProduto(req.body.nome, req.body.descricao,
                req.body.preco, req.body.data_atualizado);
            res.status(201).send('Produto cadastrado com sucesso!');
        } catch (erro) {
            res.status(500).json({message: erro.message});
        }
    }
    /**
     * @description Busca e delete o produto de id igual do BD
     * @param {object} req
     * @param {object} res
    */
    static async removeProduto (req, res) {
        try {
            const id = req.params.id;
            deleteProduto(id);
            res.status(200).send('Produto removido com sucesso!');
        } catch (erro) {
            res.status(500).json({ message: erro.message });
        }
    }
}

module.exports = ProdutoController;
