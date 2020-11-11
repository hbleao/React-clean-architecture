import React, { useState, useEffect, useCallback } from 'react';

import UiLoginProps from './ui';

import { Validation } from '@/Presentation/protocols/validation';
import { Authentication } from '@/Domain/useCases';

interface LoginProps {
  validation: Validation;
  authentication: Authentication
}

const Login = ({ validation, authentication }: LoginProps) => {
  const [state, setState] = useState({
    isLoading: false,
    error: '',
    email: '',
    password: '',
    emailStatus: '',
    passwordStatus: ''
  });

  useEffect(() => {
    setState({
      ...state,
      passwordStatus: validation.validate('password', state.password),
      emailStatus: validation.validate('email', state.email),
    })
  }, [state.email, state.password]);

  const handleSubmit = useCallback(async (e): Promise<void> => {
    e.preventDefault();
    setState({ ...state, isLoading: true });
    await authentication.auth({
      email: state.email,
      password: state.password
    })
  }, [state.email, state.password]);

  return (
    <UiLoginProps
      state={state}
      setState={setState}
      handleSubmit={handleSubmit}
    />
  );
};

export default Login;