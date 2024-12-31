const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

// Import database pool
const pool = require('./config/db');

// Create an Express app
const app = express();

// Middleware
app.use(express.json());
app.use(morgan('dev'));

// Routes
app.get('/', (req, res) => {
  res.status(200).send('<h1>Node.js MySQL Connection Practice</h1>');
});

// Port configuration
const PORT = process.env.PORT || 5000;

// Function to start the server
const startServer = async () => {
  try {
    // Test the database connection
    await pool.query('SELECT 1');
    console.log('MySQL database connected successfully.');

    // Start the server
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('Error connecting to the database:', error.message);
    //process.exit(1); // Exit the process with an error code
  }
};

// Start the server
startServer();

