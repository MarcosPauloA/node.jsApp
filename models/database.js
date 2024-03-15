// Get the client
import mysql from 'mysql2/promise';
//import mysql from 'mysql2'
// Create the connection to database
const connection = await mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'nodeAppDatabase',
});

/*
const dropTable = `DROP TABLE clientes`;
connection.query(dropTable, (err, results) => {
  if (err) {
      console.error('Error dropping table:', err);
  } else {
      console.log('Table dropped successfully:', results);
  }
});
*/

async function createTableClientes(){
  try {
    const [results, fields] = await connection.query(
      'CREATE TABLE IF NOT EXISTS clientes ' + 
      '(id INT PRIMARY KEY AUTO_INCREMENT, nome TEXT, sobrenome TEXT, email TEXT, idade INT);'
    );
  
    console.log(results); // results contains rows returned by server
    console.log(fields); // fields contains extra meta data about results, if available
  } catch (err) {
    console.log(err);
  }  
}

export async function instertIntoTable(){
  try {
    const [results, fields] = await connection.query(
      'INSERT INTO clientes (nome, sobrenome, email, idade) VALUES("Germano Da Picareta", "Ozvaldo", "pickaxeGuy@diamond.com", 22);'
    );
  
    console.log(results); // results contains rows returned by server
    console.log(fields); // fields contains extra meta data about results, if available
  } catch (err) {
    console.log(err);
  }  
}

export async function getAllClientes(){
  try {
    const [results, fields] = await connection.query(
      'SELECT * FROM clientes;'
    );
    
    console.log(results); // results contains rows returned by server
    console.log(fields); // fields contains extra meta data about results, if available
    return results;
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