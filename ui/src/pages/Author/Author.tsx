import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../NavBar/NavBar";

const Author = () => {
  return (
    <body className="author-body">
      <Navbar />
      <h1>Diego Fernández Montesinos</h1>
      <div className="pokemon-list"></div>
      <Link to="/home">Back to Home</Link>
    </body>
  );
};

export default Author;
