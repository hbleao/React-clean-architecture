import React from 'react';

import './style.scss';

import Header from '@/Presentation/components/header';
import Footer from '@/Presentation/components/footer';
import Input from '@/Presentation/components/input';
import Button from '@/Presentation/components/button';
import Spiner from '@/Presentation/components/spiner';

const Login = () => {
  return (
    <div className="login">
      <Header title="4Dev - Enquetes para programadores" />
      <form className="form">
        <h2 className="form__title">Login</h2>
        <Input type="email" placeholder="Digite seu email" />
        <Input type="password" placeholder="Digite sua senha" />
        <Button appearence='primary' text="Entrar" />
        <span className="form__new-account">Criar conta</span>
        <div className="form__error-wrap">
          <Spiner className="form__spinner" />
          <span className="form__error">Error</span>
        </div>
      </form>
      <Footer />
    </div>
  );
};

export default Login;