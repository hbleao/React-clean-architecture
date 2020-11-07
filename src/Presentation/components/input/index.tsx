import React from 'react';

import './style.scss';

import { InputProps } from './interface';

const Input = ({ error = false }: InputProps) => {
  return (
    <div className="input">
      <span className="input__status">🔴</span>
      <input className="input__field" type="email" placeholder="Digite sua senha" />
    </div>
  )
}

export default Input;