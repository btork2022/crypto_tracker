// To handle client-side API requests:
// Importing necessary libraries
import React, { useState, useEffect } from 'react'; // Library for building user interfaces
import axios from 'axios'; // Library to make HTTP requests

// Defining a functional component called Crypto
const Crypto = () => {
  const [prices, setPrices] = useState({}); // Declaring a state variable called 'prices' and initializing it as an empty object using the 'useState' hook

  // Function to retrieve cryptocurrency prices
  const getCryptoPrices = async () => {
    const response = await axios.get('/api/crypto'); // Make an HTTP request to the '/api/crypto' endpoint of the same server
    setPrices(response.data); // Set the 'prices' state variable to the response data received from the server
  };

  // Using the 'useEffect' hook to run the 'getCryptoPrices' function only once, when the component is mounted
  useEffect(() => {
    getCryptoPrices();
  }, []);

  // Rendering the cryptocurrency prices in JSX
  return (
    <div>
      <h2>Bitcoin: ${prices.bitcoin?.usd}</h2> // Displaying the current price of Bitcoin in USD
      <h2>Ethereum: ${prices.ethereum?.usd}</h2> // Displaying the current price of Ethereum in USD
      <h2>Litecoin: ${prices.litecoin?.usd}</h2> // Displaying the current price of Litecoin in USD
    </div>
  );
};

export default Crypto; // Exporting the 'Crypto' component for use in other parts of the application
