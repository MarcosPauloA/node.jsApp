const connection = require('../configs/dbConnection.js');
const createTableProdutos = require('../models/createTableProdutos.js');

/**
 * @description Insere produto novo
 * @param {string} nome - Nome do produto
 * @param {string} descricao - Descricao do produto
 * @param {number} preco - Valor do produto
 * @param {date} dataAtualizado - Data da insercao do produto
 */
async function insertProduto(nome, descricao, preco) {
    try {
        createTableProdutos();
        const hoje = new Date();
        const [results, fields] = await (await connection).query(
            'INSERT INTO produtos (nome, descricao, preco, data_atualizado) ' +
            'VALUES(?, ?, ?, ?);', [nome, descricao, preco, hoje],
        );

        console.log(results); // results contains rows returned by server
        // fields contains extra meta data about results, if available
        console.log(fields);
    } catch (err) {
        console.log(err);
    }
}
/**
 * @description Busca todos os produtos do BD
 * @return {object}
 */
async function getAllProdutos() {
    try {
        const [results, fields] = await (await connection).query(
            'SELECT * FROM produtos;',
        );

        // console.log(results); // results contains rows returned by server
        // fields contains extra meta data about results, if available
        console.log(fields);
        return results;
    } catch (err) {
        console.log(err);
    }
}
/**
 * @description Busca o produto de id igual no BD
 * @param {number} id
 * @return {object}
 */
async function getProdutoById(id) {
    try {
        const [results, fields] = await (await connection).query(
            'SELECT * FROM produtos WHERE id=(?);', [id],
        );

        // console.log(results); // results contains rows returned by server
        // fields contains extra meta data about results, if available
        console.log(fields);
        return results;
    } catch (err) {
        console.log(err);
    }
}
/**
 * @description Atualiza o produto de id igual no BD
 * @param {number} id
 * @param {string} novoNome
 */
async function updateProduto(id, novoNome) {
    try {
        const [results] = await (await connection).query(
            'UPDATE produtos SET nome=(?) WHERE id=(?);', [novoNome, id],
        );

        console.log(results); // results contains rows returned by server
    } catch (err) {
        console.log(err);
    }
}
/**
 * @description Busca o produto de id igual e deleta do BD
 * @param {number} id
 */
async function deleteProduto(id) {
    try {
        const [results] = await (await connection).query(
            'DELETE FROM produtos WHERE id=(?);', [id],
        );

        console.log(results); // results contains rows returned by server
    } catch (err) {
        console.log(err);
    }
}

/**
 * @description Destroi tabela produtos
 */
/*
async function dropTableClientes() {
    try {
        await (await connection).query(
            'DROP TABLE produtos;'
        );
    } catch (err) {
        console.log(err);
    }
}
*/

module.exports = {insertProduto, getAllProdutos, getProdutoById,
    updateProduto, deleteProduto};
