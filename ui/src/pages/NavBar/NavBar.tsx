import React, { useEffect, useState } from "react";
import "./NavBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignInAlt, faSignOutAlt, faHome, faGamepad, faTv, faNewspaper, faTrophy, faStar } from "@fortawesome/free-solid-svg-icons";
import { signOut } from "../../shares/apiService";
import pokeball from '../../images/pokeball.png'

const Navbar: React.FC = () => {
  const [user, setUser] = useState<{
    nombre: string;
    contraseña: string;
  } | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = async () => {
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
        <li className="navbar-item logo">
          <a href="/">
            <img src={pokeball} alt="Pokeball" />
          </a>
        </li>
        <li className="navbar-item">
          <a href="/home">
            <FontAwesomeIcon icon={faHome} /> Inicio
          </a>
        </li>
        <li className="navbar-item">
          <a href="/pokedex">
            <FontAwesomeIcon icon={faStar} /> Pokédex
          </a>
        </li>
        <li className="navbar-item">
          <a href="/events">
            <FontAwesomeIcon icon={faTrophy} /> Eventos de Play! Pokémon
          </a>
        </li>
        <li className="navbar-item logIn">
          {user ? (
            <>
              <span>Welcome, {user.nombre}</span>
              <button onClick={handleLogout}>
                <a href="./">
                  <FontAwesomeIcon icon={faSignOutAlt} /> Log Out
                </a>
              </button>
            </>
          ) : (
            <a href="/home">
              <FontAwesomeIcon icon={faSignInAlt} /> LogIn
            </a>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
