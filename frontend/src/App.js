import React from 'react';
import { BrowserRouter as Router, Routes,  } from 'react-router-dom';
import { Auth0Provider, useAuth0 } from '@auth0/auth0-react'; // Import useAuth0
import Navbar from './components/NavBar';

const App = () => {
  const domain="dev-tiq8giasgeo638le.us.auth0.com"
  const clientId="9UauYkNKuvjHiDT7PgKwG9wKbB2rumWK"
  const { isAuthenticated } = useAuth0(); 
  console.log(isAuthenticated)

  return (
    <Auth0Provider domain={domain} clientId={clientId} redirectUri={window.location.origin}>
      <Router>
        <Navbar isAuthenticated={isAuthenticated} /> {/* Pass isAuthenticated status to Navbar */}
        <Routes>
          {/* Define your routes here */}
        </Routes>
      </Router>
    </Auth0Provider>
  );
};

export default App;
