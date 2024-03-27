import connection from './dbConnection.js';

/**
 * @description Cria tabela produtos
 */
/*
async function dropTableClientes() {
    try {
        await connection.query(
            'DROP TABLE produtos;'
        );
    } catch (err) {
        console.log(err);
    }
}
*/
/**
 * @description Cria tabela produtos
 */
async function createTableProdutos() {
    try {
        const [results, fields] = await connection.query(
            'CREATE TABLE IF NOT EXISTS produtos ' +
      '(id INT PRIMARY KEY AUTO_INCREMENT, nome VARCHAR(255), ' +
      'descricao VARCHAR(255), preco REAL, data_atualizado DATETIME);',
        );

        console.log(results); // results contains rows returned by server
        // fields contains extra meta data about results, if available
        console.log(fields);
    } catch (err) {
        console.log(err);
    }
}
/**
 * @description Insere produto novo
 * @param {string} nome - Nome do produto
 * @param {string} descricao - Descricao do produto
 * @param {number} preco - Valor do produto
 * @param {date} dataAtualizado - Data da insercao do produto
 */
export async function insertProduto(nome, descricao, preco, dataAtualizado) {
    try {
        createTableProdutos();
        const [results, fields] = await connection.query(
            'INSERT INTO produtos (nome, descricao, preco, data_atualizado) ' +
            'VALUES(?, ?, ?, ?);', [nome, descricao, preco, dataAtualizado],
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
export async function getAllProdutos() {
    try {
        const [results, fields] = await connection.query(
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
export async function getProdutoById(id) {
    try {
        const [results, fields] = await connection.query(
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
export async function updateProduto(id, novoNome) {
    try {
        const [results] = await connection.query(
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
export async function deleteProduto(id) {
    try {
        const [results] = await connection.query(
            'DELETE FROM produtos WHERE id=(?);', [id],
        );

        console.log(results); // results contains rows returned by server
    } catch (err) {
        console.log(err);
    }
}
/*
// A simple SELECT query
try {
  const [results, fields] = await connection.query(
    'SELECT * FROM `table` WHERE `name` = "Page" AND `age` > 45'
  );

  console.log(results); // results contains rows returned by server
  console.log(fields);
  // fields contains extra meta data about results, if available
} catch (err) {
  console.log(err);
}

// Using placeholders
try {
  const [results] = await connection.query(
    'SELECT * FROM `table` WHERE `name` = ? AND `age` > ?',
    ['Page', 45]
  );

  console.log(results);
} catch (err) {
  console.log(err);
}
*/
