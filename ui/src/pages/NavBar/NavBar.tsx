import React, { useEffect, useState } from 'react';
import './NavBar.css'; 

const Navbar: React.FC = () => {
  const [user, setUser] = useState<{ nombre: string; contraseña: string } | null>(null);

  useEffect(() => {
    // Recuperar datos del localStorage
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    // Limpiar localStorage y actualizar el estado del usuario
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item"><a href="home">Inicio</a></li>
        <li className="navbar-item"><a href="favorites">Favoritos</a></li>
        <li className="navbar-item logIn">
          {user ? (
            <>
              <span>Bienvenido, {user.nombre}</span>
              <button onClick={handleLogout}>Log Out</button>
            </>
          ) : (
            <a href="/">LogIn</a>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
