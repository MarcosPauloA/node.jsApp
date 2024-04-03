// Get the client
const mysql = require('mysql2/promise');
// dotenv for config.env
const dotenv = require('dotenv');
dotenv.config();

// Create the connection to database
const connection = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    database: process.env.MYSQL_DB,
});

module.exports = connection;
