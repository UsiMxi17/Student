const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'rubberbandGang021',
    database: 'ecommerce_db',
    waitForConnections: true,
    connectionLimit: 10, // Number of connections in the pool
    queueLimit: 0
});

module.exports = pool.promise(); // Export the pool with promise support