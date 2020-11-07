import React from 'react';
import ReactDOM from 'react-dom';

import '@/Presentation/assets/styles/global.scss';

import Router from '@/Presentation/routes';

ReactDOM.render(<Router />, document.querySelector('.main'));