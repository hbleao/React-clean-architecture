import React from 'react';

import './style.scss';

import Spiner from '@/Presentation/components/spiner';

import Logo from '@/Presentation/assets/images/logo.svg';

const Login = () => {
  return (
    <div className="login">
      <header className="header">
        <img className="header__logo" src={Logo} alt="logo" />
        <h1 className="header__title">4Dev - Enquetes para programadores</h1>
      </header>
      <form className="form">
        <h2 className="form__title">Login</h2>
        <div className="input">
          <span className="input__status">🔴</span>
          <input className="input__field" type="email" placeholder="Digite sua senha" />
        </div>
        <div className="input">
          <span className="input__status">🔴</span>
          <input className="input__field" type="password" placeholder="Digite sua senha" />
        </div>
        <button className="btn btn-primary" type="submit">Entrar</button>
        <span className="form__new-account">Criar conta</span>
        <div className="form__error-wrap">
          <Spiner className="form__spinner" />
          <span className="form__error">Error</span>
        </div>
      </form>
      <footer className="footer"></footer>
    </div>
  );
};

export default Login;