// Get the client
import mysql from 'mysql2/promise';
//import mysql from 'mysql2'
// Create the connection to database
const connection = await mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'nodeAppDatabase',
});

async function dropTableClientes(){
  try {
    const [results, fields] = await connection.query(
      'DROP TABLE clientes;'
    );
    
    //console.log(results); // results contains rows returned by server
    //console.log(fields); // fields contains extra meta data about results, if available
    //return results;
  } catch (err) {
    console.log(err);
  }  
}

async function createTableClientes(){
  try {
    const [results, fields] = await connection.query(
      'CREATE TABLE IF NOT EXISTS clientes ' + 
      '(id INT PRIMARY KEY AUTO_INCREMENT, nome VARCHAR(255), sobrenome VARCHAR(255), email VARCHAR(255), idade INT);'
    );
  
    //console.log(results); // results contains rows returned by server
    //console.log(fields); // fields contains extra meta data about results, if available
  } catch (err) {
    console.log(err);
  }  
}

export async function instertCliente(nome, sobrenome, email, idade){
  try {
    createTableClientes();
    const [results, fields] = await connection.query(
      'INSERT INTO clientes (nome, sobrenome, email, idade) VALUES(?, ?, ?, ?);', [nome, sobrenome, email, idade]
    );
  
    //console.log(results); // results contains rows returned by server
    //console.log(fields); // fields contains extra meta data about results, if available
  } catch (err) {
    console.log(err);
  }  
}

export async function getAllClientes(){
  try {
    const [results, fields] = await connection.query(
      'SELECT * FROM clientes;'
    );
    
    //console.log(results); // results contains rows returned by server
    //console.log(fields); // fields contains extra meta data about results, if available
    return results;
  } catch (err) {
    console.log(err);
  }  
}

export async function getClienteById(id){
  try {
    const [results, fields] = await connection.query(
      'SELECT * FROM clientes WHERE id=(?);', [id]
    );
    
    //console.log(results); // results contains rows returned by server
    //console.log(fields); // fields contains extra meta data about results, if available
    return results;
  } catch (err) {
    console.log(err);
  }   
}

export async function updateCliente(id, novoNome){
  try {
    const [results] = await connection.query(
      'UPDATE clientes SET nome=(?) WHERE id=(?);', [novoNome, id]
    );
    
    //console.log(results); // results contains rows returned by server
  } catch (err) {
    console.log(err);
  }   
}

export async function deleteCliente(id){
  try {
    const [results] = await connection.query(
      'DELETE FROM clientes WHERE id=(?);', [id]
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