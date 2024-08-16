import React, { useState } from "react";
import "./LogIn.css";

interface LogInProps {
  setUser: React.Dispatch<React.SetStateAction<string[]>>;
}

const LogIn: React.FC<LogInProps> = ({ setUser }) => {
  const [nombre, setNombre] = useState<string>("");
  const [contraseña, setContraseña] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
   // Validación del nombre de usuario
   if (nombre.length < 4 || nombre.length > 10) {
    setError("El nombre de usuario debe tener entre 4 y 10 caracteres.");
    return;
  }

  // Validación de la contraseña
  const contraseñaRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{4,}$/;
  if (!contraseñaRegex.test(contraseña)) {
    setError("La contraseña debe contener al menos una mayúscula y un número.");
    return;
  }
    console.log("setUser:", setUser);
    setError("");
    setUser([nombre]); 
    console.log("setUser:", setUser);

    localStorage.setItem("user", JSON.stringify({ nombre, contraseña }));
    console.log("Usuario guardado en localStorage:", { nombre, contraseña });
  };

  return (
    <section>
      <h1>Login</h1>
      <form className="formulario" onSubmit={handleSubmit}>
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          placeholder="Nombre de usuario"
        />
        <input
          type="password"
          value={contraseña}
          onChange={(e) => setContraseña(e.target.value)}
          placeholder="Contraseña"
        />
        <button>Iniciar sesión</button>
      </form>
      {error && <p>{error}</p>}
    </section>
  );
};

export default LogIn;
