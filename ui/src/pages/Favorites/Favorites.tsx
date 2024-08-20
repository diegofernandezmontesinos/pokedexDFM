import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../NavBar/NavBar";
import "./Favorites.css";
import { getPokemonFavorites } from "../../shares/apiService";

interface FavoritesPageProps {
  favorites: Set<string>;
}

const FavoritesPage: React.FC<FavoritesPageProps> = () => {
  const [favorites, setFavorites] = useState<string[]>([]);

  const fetchFavoritesFromBackend = async () => {
    try {
      const response = await getPokemonFavorites();
      if (!response.ok) {
        throw new Error("Error al obtener los favoritos");
      }
      const data = await response.json();
      setFavorites(data.favorites);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    fetchFavoritesFromBackend();
  }, []);
  return (
    <body className="favorite-body">
      <div className="favoritePage ">
        <Navbar />
        <h1>
          This is your Pokedex, let's see your favorites pokemon or even costume
          your own pokémon
        </h1>
        <div className="pokemon-list">
          {Array.from(favorites).map((name) => (
            <div key={name} className="pokemon-item">
              <h2>{name}</h2>
            </div>
          ))}
        </div>
        <Link to="/">Back to Home</Link>
      </div>
    </body>
  );
};

export default FavoritesPage;
