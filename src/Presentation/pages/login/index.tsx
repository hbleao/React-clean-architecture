import React, { useState, useEffect, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import UiLoginProps from './ui';

import { Validation } from '@/presentation/protocols/validation';
import { Authentication } from '@/domain/useCases';

interface LoginProps {
  validation: Validation;
  authentication: Authentication
};

const Login = ({ validation, authentication }: LoginProps) => {
  const history = useHistory();
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
    try {
      e.preventDefault();

      if (state.emailStatus || state.passwordStatus) return;

      setState({ ...state, isLoading: true });
      const account = await authentication.auth({
        email: state.email,
        password: state.password
      });

      localStorage.setItem('accessToken', account.accessToken);
      history.replace('/');
    } catch (err) {
      setState({
        ...state,
        isLoading: false,
        error: err.message
      })
    }
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