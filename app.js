import express from "express";

const app = express();
app.use(express.json()); 

const clientes = [
    {
        id: 1,
        nome: "Zé Da Picareta",
        sobrenome: "Ozvaldo",
        email: "pickaxeGuy@diamond.com",
        idade: 22
    },
    {
        id: 2,
        nome: "José Do Machado",
        sobrenome: "Carvalho",
        email: "axeGuy@diamond.com",
        idade: 33
    },
]

function buscaCliente(id){
    return clientes.findIndex(clientes => {
        return clientes.id === Number(id);
    })
}

app.get("/", (req, res) => {
    res.status(200).send("Node.js APP");
});

app.get("/clientes", (req, res) => {
    res.status(200).json(clientes);
});

app.get("/clientes/:id" , (req, res) => {
    const index = buscaCliente(req.params.id);
    res.status(200).json(clientes[index]);
});

app.post("/clientes", (req, res) => {
    clientes.push(req.body);
    res.status(201).send("Cliente cadastrado com sucesso!");
});

app.put("/clientes/:id", (req, res) => {
    const index = buscaCliente(req.params.id);
    clientes[index].nome = req.body.nome;
    res.status(200).json(clientes);
});

app.delete("/clientes/:id", (req, res) =>{
    const index = buscaCliente(req.params.id);
    clientes.splice(index, 1);
    res.status(200).send("Cliente removido com sucesso!")
});

export default app;