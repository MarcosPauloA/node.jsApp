const connection = require('../configs/dbConnection.js');
/**
 * @description Cria tabela clientes
 */
async function createTableClientes() {
    try {
        const [results, fields] = await (await connection).query(
            'CREATE TABLE IF NOT EXISTS clientes ' +
      '(id INT PRIMARY KEY AUTO_INCREMENT, nome VARCHAR(255), ' +
      'sobrenome VARCHAR(255), email VARCHAR(255), idade INT);',
        );

        console.log(results); // results contains rows returned by server
        // fields contains extra meta data about results, if available
        console.log(fields);
    } catch (err) {
        console.log(err);
    }
}

module.exports = createTableClientes;
