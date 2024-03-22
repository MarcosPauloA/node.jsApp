import { getAllClientes, getClienteById, instertCliente, updateCliente } from "../models/database.js";

class ClienteController{

    static async listarClientes (req, res) {
        try{
            const listaClientes = await getAllClientes(); 
            res.status(200).json(listaClientes);
        } catch (erro) {
            res.status(500).json({ message: erro.message});
        }
    }

    static async listaClientePorId (req, res) {
        try{
            const id = req.params.id;
            const clienteEncontrado = await getClienteById(id);
            res.status(200).json(clienteEncontrado);
        } catch (erro) {
            res.status(500).json({ message: erro.message });
        }
    }
    
    static async putCliente (req, res) {
        try{
            const id = req.params.id;
            const novoNome = req.body.nome;
            updateCliente(id, novoNome);
            res.status(200).json("Cliente atualizado com sucesso");
        } catch (erro){
            res.status(500).json({message: erro.message});
        }
    }

    static async postCliente (req, res) {
        try {
            instertCliente(req.body.nome, req.body.sobrenome, req.body.email, req.body.idade);
            res.status(201).send("Cliente cadastrado com sucesso!");
        } catch (erro) {
            res.status(500).json({message: erro.message});
        }  
    }


}

export default ClienteController;