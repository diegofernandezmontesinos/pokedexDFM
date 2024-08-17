import Navbar from "../NavBar/NavBar";
import "./LandingPage.css";


const LandingPage = () => {
  return (
    <div className="landing-page">
      <Navbar />
      <div id="image-container">
        <img
          src="../../images/images.jpeg"
          alt="Pokemones y Masterball"
          className="pokemon-image"
        />
      </div>
      <div id="container">Welcome to the Pokedex API DFM</div>
    </div>
  );
};

export default LandingPage;
