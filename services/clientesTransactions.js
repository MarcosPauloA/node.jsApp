const connection = require('../configs/dbConnection.js');
const createTableClientes = require('../models/createTableClientes.js');

/**
 * @description Insere novo cliente no BD
 * @param {string} nome
 * @param {string} sobrenome
 * @param {string} email
 * @param {number} idade
 */
async function instertCliente(nome, sobrenome, email, idade) {
    try {
        createTableClientes();
        const [results, fields] = await (await connection).query(
            'INSERT INTO clientes (nome, sobrenome, email, idade) ' +
            'VALUES(?, ?, ?, ?);', [nome, sobrenome, email, idade],
        );

        console.log(results); // results contains rows returned by server
        // fields contains extra meta data about results, if available
        console.log(fields);
    } catch (err) {
        console.log(err);
    }
}
/**
 * @description Busca todos clientes do BD
 */
async function getAllClientes() {
    try {
        const [results] = await (await connection).query(
            'SELECT * FROM clientes;',
        );

        // console.log(results); // results contains rows returned by server
        return results;
    } catch (err) {
        console.log(err);
    }
}
/**
 * @description Busca o cliente de id igual do BD
 * @param {number} id
 */
async function getClienteById(id) {
    try {
        const [results, fields] = await (await connection).query(
            'SELECT * FROM clientes WHERE id=(?);', [id],
        );

        console.log(results); // results contains rows returned by server
        // fields contains extra meta data about results, if available
        console.log(fields);
        return results;
    } catch (err) {
        console.log(err);
    }
}
/**
 * @description Atualiza nome de cliente de id igual
 * @param {number} id
 * @param {string} novoNome
 */
async function updateCliente(id, novoNome) {
    try {
        const [results] = await (await connection).query(
            'UPDATE clientes SET nome=(?) WHERE id=(?);', [novoNome, id],
        );

        console.log(results); // results contains rows returned by server
    } catch (err) {
        console.log(err);
    }
}
/**
 * @description Busca o cliente de id igual e deleta do BD
 * @param {number} id
 */
async function deleteCliente(id) {
    try {
        const [results] = await (await connection).query(
            'DELETE FROM clientes WHERE id=(?);', [id],
        );
        console.log(results); // results contains rows returned by server
    } catch (err) {
        console.log(err);
    }
}

/**
 * @description Destroi tabela clientes
 */
/*
async function dropTableClientes() {
    try {
        const [results, fields] = await (await connection).query(
            'DROP TABLE clientes;'
        );

        console.log(results); // results contains rows returned by server
        // fields contains extra meta data about results, if available
        console.log(fields);
    } catch (err) {
        console.log(err);
    }
}
*/

module.exports = {instertCliente, getAllClientes,
    getClienteById, updateCliente, deleteCliente};
