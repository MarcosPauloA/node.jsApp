// import http from "http";
const app = require('./app.js');
const PORT = 3000;

app.listen(PORT, () => {
    console.log('Servidor escutando!');
});
