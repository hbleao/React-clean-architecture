import React, { useRef } from 'react';

import './style.scss';

import { InputProps } from './interface';

const Input = ({ error, title, role, ...rest }: InputProps) => {
  const inputRef = useRef(null);
  const enableInput = (event: React.FocusEvent<HTMLInputElement>) => {
    event.target.readOnly = false;
  };

  return (
    <div className="input">
      <input className="input__field" readOnly onFocus={enableInput} ref={inputRef} {...rest} />
      <span className="input__status" role={role} title={title}>🔴</span>
    </div>
  )
};

export default Input;