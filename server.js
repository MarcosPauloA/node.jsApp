// import http from "http";
import app from "./app.js"
const PORT = 3000;

const rotas = {
    "/": "Node.js APP",
    "/clientes": "Pagina de clientes",
    "/produtos": "Pagina de produtos"
}
/*
const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end(rotas[req.url]);
})
*/
app.listen(PORT, () => {
    console.log("Servidor escutando!");
})