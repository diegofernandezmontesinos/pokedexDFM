import React, { useState } from 'react';
import './NavBar.css'; 

const Navbar: React.FC = () => {
  
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item"><a href="home">Inicio</a></li>
        <li className="navbar-item"><a href="favorites">Favoritos</a></li>
        <li className="navbar-item"><a href="Authentication">LogIn</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
