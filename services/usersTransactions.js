const connection = require('../configs/dbConnection.js');
const createTableUsers = require('../models/createTableUsuarios.js');

/**
 * @description Insere novo usuario no BD
 * @param {string} usuario
 * @param {string} senha
 * @param {string} token
 */
async function instertUser(usuario, senha, token) {
    try {
        createTableUsers();
        const [results, fields] = await (await connection).query(
            'INSERT INTO usuarios (usuario, senha, token) ' +
            'VALUES(?, ?, ?);', [usuario, senha, token],
        );

        console.log(results); // results contains rows returned by server
        // fields contains extra meta data about results, if available
        console.log(fields);
    } catch (err) {
        console.log(err);
    }
}
/**
 * @description Busca todos usuarios do BD
 */
async function getAllUsers() {
    try {
        const [results] = await (await connection).query(
            'SELECT * FROM usuarios;',
        );

        // console.log(results); // results contains rows returned by server
        // (await connection).end();
        return results;
    } catch (err) {
        console.log(err);
    }
}
/**
 * @description Busca o usuario de id igual do BD
 * @param {number} id
 */
async function getUserById(id) {
    try {
        const [results, fields] = await (await connection).query(
            'SELECT * FROM usuarios WHERE id=(?);', [id],
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
 * @description Atualiza nome de usuario de id igual
 * @param {number} id
 * @param {string} novoNome
 */
async function updateUser(id, novoNome) {
    try {
        const [results] = await (await connection).query(
            'UPDATE usuarios SET usuario=(?) WHERE id=(?);', [novoNome, id],
        );

        console.log(results); // results contains rows returned by server
    } catch (err) {
        console.log(err);
    }
}
/**
 * @description Busca o usuario de id igual e deleta do BD
 * @param {number} id
 */
async function deleteUser(id) {
    try {
        const [results] = await (await connection).query(
            'DELETE FROM usuarios WHERE id=(?);', [id],
        );
        console.log(results); // results contains rows returned by server
    } catch (err) {
        console.log(err);
    }
}

/**
 * @description Destroi tabela usuarios
 */
/*
async function dropTableUsers() {
    try {
        const [results, fields] = await (await connection).query(
            'DROP TABLE usuarios;'
        );

        console.log(results); // results contains rows returned by server
        // fields contains extra meta data about results, if available
        console.log(fields);
    } catch (err) {
        console.log(err);
    }
}
*/

module.exports = {instertUser, getAllUsers,
    getUserById, updateUser, deleteUser};
