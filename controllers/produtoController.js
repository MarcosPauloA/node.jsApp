const { getAllProdutos, getProdutoById,
    insertProduto, updateProduto, deleteProduto } =
    require('../services/produtosTransactions.js');

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

            // Salva os dados no cache com uma duração de 30 segundos
            cache.set(req.originalUrl, listaClientes, 30);

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

            // Salva os dados no cache com uma duração de 30 segundos
            cache.set(req.originalUrl, produtoEncontrado, 30);

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

            // Deleta o cache para que seja atualizado
            cache.flushAll();

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

            // Remove o cache de produtos para que seja atualizado
            cache.del(req.originalUrl);

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

            // Deleta o cache para que seja atualizado
            cache.flushAll();

            res.status(200).send('Produto removido com sucesso!');
        } catch (erro) {
            res.status(500).json({ message: erro.message });
        }
    }
}

module.exports = ProdutoController;
