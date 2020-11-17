import React from 'react';
import ReactDOM from 'react-dom';

import '@/presentation/assets/styles/global.scss';

import Router from '@/presentation/routes';
import { makeLogin } from '@/main/factories/pages/login/login-factory';

ReactDOM.render(<Router makeLogin={makeLogin} />, document.querySelector('.main'));