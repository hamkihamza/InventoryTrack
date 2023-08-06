import React from 'react';
import { Link } from 'react-router-dom';
import LoginButton from './Login'; 
import LogoutButton from './Logout'; 

const Navbar = ({ isAuthenticated }) => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        {isAuthenticated ? <LogoutButton /> : <LoginButton />}
      </ul>
    </nav>
  );
};

export default Navbar;
