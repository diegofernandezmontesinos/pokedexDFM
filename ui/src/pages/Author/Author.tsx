import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../NavBar/NavBar";

const Author = () => {
  return (
    <body className="author-body">
      <Navbar />
      <h1>Diego Fernández Montesinos</h1>
      <p>This is my CV</p>
      <a >If you want to know more about me, go to my LinkedIn profile: </a>
      <a >If you want to know more about my projects, go to my GitHub profile: </a>
      <Link to="/home">Back to Home</Link>
    </body>
  );
};

export default Author;
