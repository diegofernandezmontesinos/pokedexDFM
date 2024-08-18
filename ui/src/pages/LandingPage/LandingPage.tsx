import Navbar from "../NavBar/NavBar";
import "./LandingPage.css";
import pokeball from "../../images/images.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <Navbar />
      <div className="text-container">welcome to you Pokedex App</div>
      <div id="image-container">
        <p>
          This is you Pokedex App, the place to search, found, and catch all
          your pokemons, like Ash, if you wan't to be the very best, you have to
          catch en all
        </p>
        <img
          src={pokeball}
          alt="Pokemones y Masterball"
          className="pokemon-image"
        />
      </div>
      <div className="button-container">
        <p>To start, let's register</p>
        <button>
          <a href="./">
            <FontAwesomeIcon icon={faSignOutAlt} /> Click to login
          </a>
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
