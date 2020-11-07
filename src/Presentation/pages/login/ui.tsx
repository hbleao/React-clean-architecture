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

import { UiLoginProps } from './interface';

const Login = ({
  isLoading,
  errorMessage
}: UiLoginProps) => {
  return (
    <div className="login">
      <Header title="4Dev - Enquetes para programadores" />
      <Form handleSubmit={() => { }} >
        <h2 className="login__title-form">Login</h2>
        <Input type="email" placeholder="Digite seu email" />
        <Input type="password" placeholder="Digite sua senha" />
        <Button appearence='primary' disabled text="Entrar" role="login-button" />
        <span className="login__new-account">Criar conta</span>
        <FormStatus isLoading={isLoading} errorMessage={errorMessage} role="login-formStatus" />
      </Form>
      <Footer />
    </div>
  );
};

export default Login;