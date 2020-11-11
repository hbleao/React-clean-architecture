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
          name="email"
          placeholder="Digite seu email"
          value={state.email}
          onChange={e => setState({ ...state, email: e.target.value })}
          title={state.emailStatus}
          role="email"
        />
        <Input
          type="password"
          name="password"
          placeholder="Digite sua senha"
          value={state.password}
          onChange={e => setState({ ...state, password: e.target.value })}
          title={state.passwordStatus}
          role="password"
        />
        <Button
          appearence='primary'
          disabled={!!state.emailStatus || !!state.passwordStatus}
          text="Entrar"
          role="button"
        />
        <span className="login__new-account">Criar conta</span>
        <FormStatus
          isLoading={state.isLoading}
          errorMessage={state.error}
          role="form-status"
        />
      </Form>
      <Footer />
    </div>
  );
};

export default Login;