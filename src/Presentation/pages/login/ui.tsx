import React from 'react';
import { Link } from 'react-router-dom';

import './style.scss';

import {
  Footer,
  Header,
  Form,
  FormStatus,
  Button,
  Input
} from '@/presentation/components';

import { UiLoginProps } from './interface';

const Login = ({
  state,
  setState,
  handleSubmit
}: UiLoginProps) => {
  return (
    <div className="login">
      <Header title="4Dev - Enquetes para programadores" />
      <Form role="form" handleSubmit={handleSubmit} >
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
          type="submit"
          appearence='primary'
          disabled={!!state.emailStatus || !!state.passwordStatus || state.isLoading}
          text="Entrar"
          role="button"
        />
        <Link to="signup" role="signup" className="login__new-account">Criar conta</Link>
        <FormStatus
          isLoading={state.isLoading}
          errorMessage={state.error}
          role="form-status"
          roleSpinner="spinner"
          roleError="error-message "
        />
      </Form>
      <Footer />
    </div>
  );
};

export default Login;