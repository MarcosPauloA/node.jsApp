import express from "express";
import "./models/database.js";
import { getAllClientes, getClienteById } from "./models/database.js";
import routes from "./routes/index.js";
const app = express();
routes(app);
//app.use(express.json()); 

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
    res.status(200).send("nodeJs APP");
});

/*
app.get("/clientes", async (req, res) => {
    const listaClientes = await getAllClientes(); 
    res.status(200).json(listaClientes);
});


app.get("/clientes/:id" , (req, res) => {
    const index = buscaCliente(req.params.id);
    res.status(200).json(clientes[index]);
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
app.post("/clientes", (req, res) => {
    clientes.push(req.body);
    res.status(201).send("Cliente cadastrado com sucesso!");
});
*/





export default app;

/*
RESTful API Development: Express is excellent for creating RESTful APIs. 
You can define routes, handle requests, and manage URL structures efficiently. 
For instance, you can build an API to manage user data, products, or any other resource.
Middleware Functions: Middleware functions play a crucial role in Express. 
They enable tasks like request parsing, logging, and authentication. 
You can create custom middleware to handle specific tasks in your application.
Template Engines: Express supports template engines like Pug or EJS. 
These engines allow you to generate dynamic HTML content on the server side, which is useful for server-side rendering, SEO, and performance optimization.
Database Integration: You can integrate databases (such as MongoDB, MySQL, or PostgreSQL) with Express. 
Create routes to handle database queries, insertions, and updates.
Authentication and Authorization: Implement user authentication and authorization using Express middleware. 
You can use libraries like Passport.js for authentication strategies.
Optimizing Performance: Express provides tools for optimizing performance, such as caching, compression, and minimizing response times.
Remember that Express is versatile, unopinionated, and minimalistic, making it a popular choice for backend development in Node.js. 
Explore these examples to enhance your Express.js skills and elevate your Node.js journey! 🚀
*/