// To handle client-side API requests:
// Importing necessary libraries
import React, { useState, useEffect } from 'react'; // Library for building user interfaces
import axios from 'axios'; // Library to make HTTP requests
// Inputing Material-UI styling
import { makeStyles } from '@material-ui/core/styles'; // Library for customizing Material UI components
import Typography from '@material-ui/core/Typography'; // Material UI component for displaying text

// Function for customizing Material UI components
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: theme.spacing(4),
  },
  title: {
    marginBottom: theme.spacing(2),
  },
  price: {
    fontSize: '2rem',
    marginBottom: theme.spacing(2),
  },
}));

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

  // Rendering the cryptocurrency prices
  return (
    <div className={classes.root}>
      <Typography variant="h4" className={classes.title}>
        Cryptocurrency Prices
      </Typography>
      <Typography variant="h6" className={classes.price}>
        Bitcoin: ${prices.bitcoin?.usd}
      </Typography>
      <Typography variant="h6" className={classes.price}>
        Ethereum: ${prices.ethereum?.usd}
      </Typography>
      <Typography variant="h6" className={classes.price}>
        Litecoin: ${prices.litecoin?.usd}
      </Typography>
    </div>
  );
};

export default Crypto; // Exporting the 'Crypto' component for use in other parts of the application
