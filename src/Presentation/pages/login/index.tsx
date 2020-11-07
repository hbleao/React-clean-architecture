import React, { useState } from 'react';

import UiLoginProps from './ui';

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  return (
    <UiLoginProps
      isLoading={isLoading}
      errorMessage={errorMessage}
    />
  );
};

export default Login;