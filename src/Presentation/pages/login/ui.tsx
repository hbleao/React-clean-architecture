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
  state,
  setState
}: UiLoginProps) => {
  return (
    <div className="login">
      <Header title="4Dev - Enquetes para programadores" />
      <Form handleSubmit={() => { }} >
        <h2 className="login__title-form">Login</h2>
        <Input
          type="email"
          placeholder="Digite seu email"
          value={state.email}
          onChange={e => setState({ ...state, email: e.target.value })}
          role="email"
          roleError="emailError"
          title="Campo obrigatório"
        />
        <Input
          type="password"
          placeholder="Digite sua senha"
          value={state.password}
          onChange={e => setState({ ...state, password: e.target.value })}
          role="password"
          roleError="passwordError"
          title="Campo obrigatório"
        />
        <Button
          appearence='primary'
          disabled
          text="Entrar"
          role="button"
        />
        <span className="login__new-account">Criar conta</span>
        <FormStatus
          isLoading={state.isLoading}
          errorMessage={state.error}
          role="formStatus"
        />
      </Form>
      <Footer />
    </div>
  );
};

export default Login;