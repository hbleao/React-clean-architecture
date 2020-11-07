import React from 'react';

import './style.scss';

import { ButtonProps } from './interface';

const Button = ({ text, appearence, ...rest }: ButtonProps) => {
  return (
    <button className={`btn btn-${appearence}`} {...rest} >
      {text}
    </button>
  )
};

export default Button;