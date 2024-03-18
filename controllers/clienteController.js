import { getAllClientes } from "../models/database.js";

class ClienteController{

    static async listarClientes (req, res) {
        const listaClientes = await getAllClientes(); 
        res.status(200).json(listaClientes);
    }
    
}

export default ClienteController;