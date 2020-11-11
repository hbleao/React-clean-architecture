import React from 'react';
import ReactDOM from 'react-dom';

import '@/presentation/assets/styles/global.scss';

import Router from '@/presentation/routes';

ReactDOM.render(<Router />, document.querySelector('.main'));