import React, { useEffect, useState } from "react";
import "./NavBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignInAlt, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { signOut } from "../../shares/apiService";

const Navbar: React.FC = () => {
  const [user, setUser] = useState<{
    nombre: string;
    contraseña: string;
  } | null>(null);

  useEffect(() => {
    // Recuperar datos del localStorage
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = async () => {
    // Limpiar localStorage y actualizar el estado del usuario
    // localStorage.removeItem("user");
    try {
      const response = await signOut();
      console.log("User signed out:", response);
    } catch (error) {
      console.error("Error signing out:", error);
    }
    localStorage.removeItem("user");
    ("./");
  };

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <a href="home">Inicio</a>
        </li>
        <li className="navbar-item">
          <a href="favorites">Favoritos</a>
        </li>
        <li className="navbar-item logIn">
          {user ? (
            <>
              <span>Bienvenido, {user.nombre}</span>
              <button onClick={handleLogout}>
                <a href="./home">
                  <FontAwesomeIcon icon={faSignOutAlt} /> Log Out
                </a>
              </button>
            </>
          ) : (
            <a href="/">
              <FontAwesomeIcon icon={faSignInAlt} /> LogIn
            </a>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
