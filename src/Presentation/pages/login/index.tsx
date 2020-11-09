import React, { useState, useEffect } from 'react';

import UiLoginProps from './ui';

import { Validation } from '@/Presentation/protocols/validation';

interface LoginProps {
  validation: Validation;
}

const Login = ({ validation }: LoginProps) => {
  const [state, setState] = useState({
    isLoading: false,
    email: '',
    password: '',
    error: null,
    emailError: 'Campo obrigatório',
    passwordError: 'Campo obrigatório'
  });

  useEffect(() => {
    validation.validate('email', state.email);
  }, [state.email]);

  useEffect(() => {
    validation.validate('password', state.password);
  }, [state.password]);

  return (
    <UiLoginProps
      state={state}
      setState={setState}
    />
  );
};

export default Login;