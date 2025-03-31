// Importing the packages
const express = require('express'); // Web framework for Node.js
const mongoose = require('mongoose'); // MongoDB object modeling tool 
const dotenv = require('dotenv'); // Loads environment variables from a .env file into process.env
const morgan = require('morgan'); // HTTP request logger middleware for Node.js
const cors = require('cors'); // Middleware to enable CORS (Cross-Origin Resource Sharing)
const taskRoutes = require('../routes/tasks'); // Importing the routes for tasks

dotenv.config(); // Load environment variables from .env

const app = express(); // Creates an instance of the Express application which manages the web server and API
app.use(cors()); // Enable CORS
app.use(morgan('dev')); // Log HTTP requests
app.use(express.json()); // Parse JSON bodies
app.use('/api', taskRoutes); // Use the task routes for any requests to /api

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to MongoDB')) // if the connection is successful, log a message
  .catch((err) => console.log('Error connecting to MongoDB:', err)); // if there is an error, log it

const PORT = process.env.PORT || 5000; // Set the port to the value in the environment variable or default to 5000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`); // Start the server and log the port number
});
