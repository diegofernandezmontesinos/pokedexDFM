import React, { useState } from "react";
import "./LogIn.css";

interface LogInProps {
  setUser: React.Dispatch<React.SetStateAction<string[]>>;
}

const LogIn: React.FC<LogInProps> = ({ setUser }) => {
  const [nombre, setNombre] = useState<string>("");
  const [contraseña, setContraseña] = useState<string>("");
  const [error, setError] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (nombre === "" || contraseña === "") {
      setError(true);
      return;
    }
    console.log("setUser:", setUser);
    setError(false);
    setUser([nombre]); 
    console.log("setUser:", setUser);
  };

  return (
    <section>
      <h1>Login</h1>
      <form className="formulario" onSubmit={handleSubmit}>
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <input
          type="password"
          value={contraseña}
          onChange={(e) => setContraseña(e.target.value)}
        />
        <button>Iniciar sesión</button>
      </form>
      {error && <p>Todos los campos son obligatorios</p>}
    </section>
  );
};

export default LogIn;
