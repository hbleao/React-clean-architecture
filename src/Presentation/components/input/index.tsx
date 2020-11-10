import React, { useRef } from 'react';

import './style.scss';

import { InputProps } from './interface';

const Input = ({ error, title = 'sem nada', roleStatus, ...rest }: InputProps) => {
  const enableInput = (event: React.FocusEvent<HTMLInputElement>) => {
    event.target.readOnly = false;
  };

  return (
    <div className="input">
      <input className="input__field" readOnly onFocus={enableInput} {...rest} />
      <span className="input__status" role={roleStatus} title={title}>🔴</span>
    </div>
  )
};

export default Input;