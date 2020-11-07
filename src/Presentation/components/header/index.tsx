import React, { memo } from 'react';

import './style.scss';

import Logo from '@/Presentation/assets/images/logo.svg';

import { HeaderProps } from './interface';

const Header = ({ title }: HeaderProps) => (
  <header className="header">
    <img className="header__logo" src={Logo} alt="logo" />
    <h1 className="header__title"> {title} </h1>
  </header>
)

export default memo(Header);