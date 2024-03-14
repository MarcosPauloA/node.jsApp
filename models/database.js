// Get the client
//import mysql from 'mysql2/promise';
import mysql from 'mysql2'
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


const createTableQuery = `CREATE TABLE IF NOT EXISTS clientes (id INT PRIMARY KEY AUTO_INCREMENT, nome TEXT, sobrenome TEXT, email TEXT, idade INT);`;
connection.query(createTableQuery, (err, results) => {
    if (err) {
        console.error('Error creating table:', err);
    } else {
        console.log('Table created successfully:', results);
    }
});


const insert = `INSERT INTO clientes (nome, sobrenome, email, idade) VALUES("José Da Picareta", "Ozvaldo", "pickaxeGuy@diamond.com", 22);`;
connection.query(insert, (err, results) => {
    if (err) {
        console.error('Error inserting into table:', err);
    } else {
        console.log('Inserted into table successfully:', results);
    }
});

export async function getAllClientes(){
  const select = `SELECT * FROM clientes;`;
  connection.query(select, (err, results) => {
    if (err) {
        console.error('Error selecting from table cliente: ', err);
    } else {
        console.log('Selected table successfully:', results);
        return results;
    }
  });
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