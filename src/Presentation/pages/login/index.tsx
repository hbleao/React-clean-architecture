import React, { useState, useEffect, useCallback } from 'react';

import UiLoginProps from './ui';

import { Validation } from '@/Presentation/protocols/validation';

interface LoginProps {
  validation: Validation;
}

const Login = ({ validation }: LoginProps) => {
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

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    setState({
      ...state,
      isLoading: true
    })
  }, []);

  return (
    <UiLoginProps
      state={state}
      setState={setState}
      handleSubmit={handleSubmit}
    />
  );
};

export default Login;