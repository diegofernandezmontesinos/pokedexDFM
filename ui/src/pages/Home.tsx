import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import HomePage from "../components/HomePage";
import "./Home.css";
import Navbar from "./NavBar/NavBar";

const Home: React.FC = () => {
  return (
    <IonPage>
      <Navbar />
      <HomePage />
    </IonPage>
  );
};

export default Home;
