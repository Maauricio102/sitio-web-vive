import React from 'react';
import '../assets/css/shared.module.css';

const Register = () => {
  return (
    <div>
      <div className="background"></div>
      <div className="container">
        <div className="box">
          <div className="logo">
            <img src="/src/assets/images/logo_login.png" alt="Clínica VIVE Logo" />
            <h1>Clínica VIVE</h1>
          </div>
          <h2>Regístrate</h2>
          <form className="form">
            <label htmlFor="name">Nombre completo</label>
            <input type="text" id="name" name="name" required />
            <label htmlFor="email">Correo electrónico</label>
            <input type="email" id="email" name="email" required />
            <label htmlFor="password">Contraseña</label>
            <input type="password" id="password" name="password" required />
            <label htmlFor="confirm-password">Confirmar contraseña</label>
            <input type="password" id="confirm-password" name="confirm-password" required />
            <button type="submit">Registrarse</button>
            <p className="link">
              ¿Ya tienes cuenta? <a href="/login">Inicia sesión aquí</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;