// importing Crypto component and adding it to the Routes component:
// Importing necessary libraries
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Library for routing in React applications
import Crypto from './components/Crypto'; // Importing the 'Crypto' component from the 'Crypto.js' file

// Defining the main functional 'App' component 
function App() {
  // Returning the main content of the application
  return (
    // Defining the router
    <Router> 
      <div>
        {/* Defining the routes */}
        <Routes>
          <Route path="/" element={<Crypto />} /> {/* Defining a route for the home page that renders the 'Crypto' component */}
        </Routes>
      </div>
    </Router>
  );
}

export default App; // Exporting the 'App' component for use in other parts of the application



