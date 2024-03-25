import connection from './dbConnection.js';

async function dropTableClientes(){
  try {
    const [results, fields] = await connection.query(
      'DROP TABLE produtos;'
    );
    
    //console.log(results); // results contains rows returned by server
    //console.log(fields); // fields contains extra meta data about results, if available
    //return results;
  } catch (err) {
    console.log(err);
  }  
}

async function createTableProdutos(){
  try {
    const [results, fields] = await connection.query(
      'CREATE TABLE IF NOT EXISTS produtos ' + 
      '(id INT PRIMARY KEY AUTO_INCREMENT, nome VARCHAR(255), descricao VARCHAR(255), preco REAL, data_atualizado DATETIME);'
    );
  
    //console.log(results); // results contains rows returned by server
    //console.log(fields); // fields contains extra meta data about results, if available
  } catch (err) {
    console.log(err);
  }  
}

export async function insertProduto(nome, descricao, preco, data_atualizado){
  try {
    createTableProdutos();
    const [results, fields] = await connection.query(
      'INSERT INTO produtos (nome, descricao, preco, data_atualizado) VALUES(?, ?, ?, ?);', [nome, descricao, preco, data_atualizado]
    );
  
    //console.log(results); // results contains rows returned by server
    //console.log(fields); // fields contains extra meta data about results, if available
  } catch (err) {
    console.log(err);
  }  
}

export async function getAllProdutos(){
  try {
    const [results, fields] = await connection.query(
      'SELECT * FROM produtos;'
    );
    
    //console.log(results); // results contains rows returned by server
    //console.log(fields); // fields contains extra meta data about results, if available
    return results;
  } catch (err) {
    console.log(err);
  }  
}

export async function getProdutoById(id){
  try {
    const [results, fields] = await connection.query(
      'SELECT * FROM produtos WHERE id=(?);', [id]
    );
    
    //console.log(results); // results contains rows returned by server
    //console.log(fields); // fields contains extra meta data about results, if available
    return results;
  } catch (err) {
    console.log(err);
  }   
}

export async function updateProduto(id, novoNome){
  try {
    const [results] = await connection.query(
      'UPDATE produtos SET nome=(?) WHERE id=(?);', [novoNome, id]
    );
    
    //console.log(results); // results contains rows returned by server
  } catch (err) {
    console.log(err);
  }   
}

export async function deleteProduto(id){
  try {
    const [results] = await connection.query(
      'DELETE FROM produtos WHERE id=(?);', [id]
    );
    
    //console.log(results); // results contains rows returned by server
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
  console.log(fields); // fields contains extra meta data about results, if available
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