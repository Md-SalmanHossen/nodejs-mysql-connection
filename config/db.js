const mysql = require('mysql2/promise'); // Corrected import for promise-based API

// Create a MySQL connection pool
const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'salman29',
  database: process.env.DB_NAME || 'student',
});

module.exports = pool;
