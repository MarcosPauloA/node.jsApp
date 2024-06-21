const connection = require('../configs/dbConnection.js');
/**
 * @description Cria tabela usuarios
 */
async function createTableUsuarios() {
    try {
        const [results, fields] = await (await connection).query(
            'CREATE TABLE IF NOT EXISTS usuarios ' +
      '(id INT PRIMARY KEY AUTO_INCREMENT, usuario VARCHAR(255), ' +
      'senha VARCHAR(255), token VARCHAR(255));',
        );

        console.log(results); // results contains rows returned by server
        // fields contains extra meta data about results, if available
        console.log(fields);
    } catch (err) {
        console.log(err);
    }
}

module.exports = createTableUsuarios;
