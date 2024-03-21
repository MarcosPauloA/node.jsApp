import { getAllClientes, getClienteById } from "../models/database.js";

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



}

export default ClienteController;