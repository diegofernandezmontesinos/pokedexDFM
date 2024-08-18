import Navbar from "../NavBar/NavBar";
import "./LandingPage.css";
import pokeball from "../../images/images.jpeg";
import pokeballIcon from "../../images/pokeball.png";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <Navbar />
      <div className="text-container">Welcome to you Pokedex App</div>
      <div id="image-container">
        <p>
          This is you Pokedex App, the place to search, found, and catch all
          your pokemons, like Ash, if you wan't to be the very best, you gotta catch 'em all.
        </p>
        <img
          src={pokeball}
          alt="Pokemones y Masterball"
          className="pokemon-image"
        />
      </div>
      <div className="button-container">
        <p>To start your adventure, let's register first:</p>
        <button>
          <a href="./home">Click here to login</a>
        </button>
        <img src={pokeballIcon} alt="Pokemones" className="pokeball-icon" />
      </div>
    </div>
  );
};

export default LandingPage;
