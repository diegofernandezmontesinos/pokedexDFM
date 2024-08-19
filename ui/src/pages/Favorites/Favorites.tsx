import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../NavBar/NavBar";

interface FavoritesPageProps {
  favorites: Set<string>;
}

const FavoritesPage: React.FC<FavoritesPageProps> = ({ favorites }) => {
  return (
    <div>
      <Navbar />
      <h1>Favorites</h1>
      <div className="pokemon-list">
        {Array.from(favorites).map((name) => (
          <div key={name} className="pokemon-item">
            <h2>{name}</h2>
          </div>
        ))}
      </div>
      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default FavoritesPage;
