import React, { useState } from "react";
import { IonPage } from "@ionic/react";
import LogIn from "../components/LogIn/LogIn";
import Navbar from "./NavBar/NavBar";
import HomePage from "../components/HomePage";


const Home: React.FC = () => {
  const [user, setUser] = useState<string[]>([]);
  return (
    <IonPage>
      <Navbar />
      {user.length > 0 ? <HomePage /> : <LogIn setUser={setUser} />}
    </IonPage>
  );
};

export default Home;
