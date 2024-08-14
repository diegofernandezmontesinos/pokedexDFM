import React from 'react';
import './NavBar.css'; // Asegúrate de crear este archivo CSS

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item"><a href="home">Inicio</a></li>
        <li className="navbar-item"><a href="#about">Acerca de</a></li>
        <li className="navbar-item"><a href="#services">Servicios</a></li>
        <li className="navbar-item"><a href="#contact">Contacto</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
