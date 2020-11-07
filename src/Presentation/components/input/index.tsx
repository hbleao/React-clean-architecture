import React, { useRef } from 'react';

import './style.scss';

import { InputProps } from './interface';

const Input = ({ error = false, ...rest }: InputProps) => {
  const inputRef = useRef(null);
  return (
    <div className="input">
      <span className="input__status">🔴</span>
      <input className="input__field" ref={inputRef} {...rest} />
    </div>
  )
};

export default Input;