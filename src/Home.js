import React from "react";
import { app } from "./fb";

const Home = () => {
  const cerrarSesion = () => {
    app.auth().signOut();
  };

  return (
    <div className="container">
      <br /><br /><br />
      <div className="text-center">
       <h1 className="form-floating">Bienvenido, sesión iniciada, wapetón.</h1>
       <br /><br />
      <button className="w-100 btn btn-lg btn-secondary" onClick={cerrarSesion}>Cerrar Sesión</button>
      </div>
    </div>
  );
};

export default Home;
