import React, { useState } from "react";
import { IonPage } from "@ionic/react";
import LogIn from "../components/LogIn/LogIn";
import Navbar from "./NavBar/NavBar";
import HomePage from "../components/HomePage";
import "./Home.css";

const Home: React.FC = () => {
  const [user, setUser] = useState<string[]>([]);
  return (
    <>
      {user.length == 0 ? <Navbar /> : <></>}
      <IonPage className={user.length == 0 ? "center-content" : "center-content-navbar" } >
        {user.length > 0 ? <HomePage /> : <LogIn setUser={setUser} />}
      </IonPage>
    </>
  );
};

export default Home;
