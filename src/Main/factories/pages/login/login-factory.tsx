import React from 'react';

import { Login } from '@/presentation/pages';

import { RemoteAuthentication } from '@/data/usecases/authentication/remote-authentication';
import { AxiosHttpClient } from '@/infra/http/axios-http-client/axios-http-client';
import { ValidationComposite } from '@/validation/validators';
import { ValidationBuilder } from '@/validation/validators/builder/validation-builder';

export const makeLogin: React.FC = () => {
  const url = 'https://fordevs.heroku.com/api/login';
  const axiosHttpClient = new AxiosHttpClient();
  const remoteAuthetication = new RemoteAuthentication(url, axiosHttpClient);
  const validationComposite = ValidationComposite.build([
    ...ValidationBuilder.field('email').email().require().build(),
    ...ValidationBuilder.field('password').min(5).require().build()
  ]);
  return (
    <Login
      authentication={remoteAuthetication}
      validation={validationComposite}
    />
  )
};