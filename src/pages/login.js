import React from 'react';
import '../assets/css/shared.module.css';

const Login = () => {
  return (
    <div>
      <div className="background"></div>
      <div className="container">
        <div className="box">
          <div className="logo">
            <img src="/src/assets/images/logo_login.png" alt="Clínica VIVE Logo" />
            <h1>Clínica VIVE</h1>
          </div>
          <h2>Inicia Sesión</h2>
          <form className="form">
            <label htmlFor="email">Correo electrónico</label>
            <input type="email" id="email" name="email" required />
            <label htmlFor="password">Contraseña</label>
            <input type="password" id="password" name="password" required />
            <button type="submit">Entrar</button>
            <p className="link">
              ¿No tienes cuenta? <a href="/register">Regístrate aquí</a>
            </p>

            <p className="link">
              <a href="/forgot-password">¿Olvidaste tu contraseña?</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;