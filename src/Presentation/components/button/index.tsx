import React from 'react';

import './style.scss';

import { ButtonProps } from './interface';

const Button = ({ className, text = 'button', appearence }: ButtonProps) => {
  return (
    <div className={className}>
      <button className={`btn btn-${appearence}`} type="submit">
        {text}
      </button>
    </div>
  )
};

export default Button;