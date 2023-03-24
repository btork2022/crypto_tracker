// To handle server-side API requests:
// Importing necessary libraries
const express = require('express'); // Library to create web server
const cors = require('cors'); // Cross-Origin Resource Sharing library
const axios = require('axios'); // Library to make HTTP requests

const app = express(); // Creating a new instance of express

app.use(cors()); // Enabling CORS on the express app

// GET route to retrieve cryptocurrency prices
app.get('/api/crypto', async (req, res) => {
  try {
    const response = await axios.get('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Clitecoin&vs_currencies=usd'); // Make an HTTP request to the specified API endpoint
    res.send(response.data); // Return the data received from the API endpoint
  } catch (error) {
    console.log(error); // Log any errors that may occur
  }
});

// POST route to add new cryptocurrency prices
app.post('/api/crypto', (req, res) => {
  // TODO: implement POST route
});

// Starting the express app on the specified port
const port = process.env.PORT || 5000; // Get the port from the environment variables, or use port 5000 if not specified
app.listen(port, () => console.log(`Server running on port ${port}`)); // Start the express app and log the port number on which the server is running
