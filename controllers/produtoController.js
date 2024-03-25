import { getAllProdutos, getProdutoById, insertProduto, updateProduto, deleteProduto } from "../models/produtosTransactions.js";

class ProdutoController{

    static async listarProdutos (req, res) {
        try{
            const listaProdutos = await getAllProdutos(); 
            res.status(200).json(listaProdutos);
        } catch (erro) {
            res.status(500).json({ message: erro.message});
        }
    }

    static async listaProdutoPorId (req, res) {
        try{
            const id = req.params.id;
            const produtoEncontrado = await getProdutoById(id);
            res.status(200).json(produtoEncontrado);
        } catch (erro) {
            res.status(500).json({ message: erro.message });
        }
    }
    
    static async putProduto (req, res) {
        try{
            const id = req.params.id;
            const novoNome = req.body.nome;
            updateProduto(id, novoNome);
            res.status(200).json("Produto atualizado com sucesso");
        } catch (erro){
            res.status(500).json({message: erro.message});
        }
    }

    static async postProduto (req, res) {
        try {
            insertProduto(req.body.nome, req.body.descricao, req.body.preco, req.body.data_atualizado);
            res.status(201).send("Produto cadastrado com sucesso!");
        } catch (erro) {
            res.status(500).json({message: erro.message});
        }  
    }

    static async removeProduto (req, res) {
        try{
            const id = req.params.id;
            deleteProduto(id);
            res.status(200).send("Produto removido com sucesso!")
        }
        catch(erro){
            res.status(500).json({ message: erro.message });
        }
    }
}

export default ProdutoController;