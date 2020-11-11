import React, { useState, useEffect } from 'react';

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

  return (
    <UiLoginProps
      state={state}
      setState={setState}
    />
  );
};

export default Login;