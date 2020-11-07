import React from 'react';

import './style.scss';

import {
  Footer,
  Header,
  Form,
  FormStatus,
  Button,
  Input
} from '@/Presentation/components';

const Login = () => {
  return (
    <div className="login">
      <Header title="4Dev - Enquetes para programadores" />
      <Form handleSubmit={() => { }} >
        <h2 className="login__title-form">Login</h2>
        <Input type="email" placeholder="Digite seu email" />
        <Input type="password" placeholder="Digite sua senha" />
        <Button appearence='primary' text="Entrar" />
        <span className="login__new-account">Criar conta</span>
        <FormStatus />
      </Form>
      <Footer />
    </div>
  );
};

export default Login;