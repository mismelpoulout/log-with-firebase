import React from "react";
import { app } from "./fb";
import style from "./style.css";

const Logueo = (props) => {
  const [isRegistrando, setIsRegistrando] = React.useState(false);

  const crearUsuario = (correo, password) => {
    app
      .auth()
      .createUserWithEmailAndPassword(correo, password)
      .then((usuarioFirebase) => {
        console.log("usuario creado:", usuarioFirebase);
        props.setUsuario(usuarioFirebase);
      });
  };

  const iniciarSesion = (correo, password) => {
    app
      .auth()
      .signInWithEmailAndPassword(correo, password)
      .then((usuarioFirebase) => {
        console.log("sesión iniciada con:", usuarioFirebase.user);
        props.setUsuario(usuarioFirebase);
      });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const correo = e.target.emailField.value;
    const password = e.target.passwordField.value;

    if (isRegistrando) {
      crearUsuario(correo, password);
    }

    if (!isRegistrando) {
      iniciarSesion(correo, password);
    }
  };

  return (
    <div className="container">
      <div className="text-center">
        <main className="form-signin">
          <br /><br />
          <h1 className="h3 mb-3 fw-normal"> {isRegistrando ? "Regístrate" : "Inicia sesión"}</h1>
          <br />
          <form onSubmit={submitHandler}>
            <div className="form-floating">
              <label for="floatingInput" > Correo </label>
              <input className="form-control" type="email" id="emailField" />
            </div><br />
            <div className="form-floating">
              <label for="floatingPassword" htmlFor="passwordField"> Contraseña </label>
              <input className="form-control" type="password" id="passwordField" />
            </div><br />
            <button className="w-100 btn btn-lg btn-primary" type="submit">
              {" "}
              {isRegistrando ? "Regístrate" : "Inicia sesión"}{" "}
            </button>
          </form>
          <hr />
          <button className="w-100 btn btn-lg btn-danger" onClick={() => setIsRegistrando(!isRegistrando)}>
            {isRegistrando
              ? "¿Ya tienes cuenta? ¡Inicia sesión"
              : "¿No tienes cuenta? ¡Regístrate gratis!"}
          </button>
          <p className="mt-5 mb-3 text-muted">encoded <a href="mailto:hola@lasfi.to" >Lasfito</a> &copy; 2021</p>
          <p className="mt-5 mb-3 text-muted">Copyright <a href="mailto:medstudioparato2@gmail.com">Medstudio</a> & Co &copy; 2020–2021</p>
        </main>
      </div>
    </div>
  );
};

export default Logueo;
