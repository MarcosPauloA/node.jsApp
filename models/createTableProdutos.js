const connection = require('../configs/dbConnection.js');

/**
 * @description Cria tabela produtos
 */
async function createTableProdutos() {
    try {
        const [results, fields] = await (await connection).query(
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

module.exports = createTableProdutos;
