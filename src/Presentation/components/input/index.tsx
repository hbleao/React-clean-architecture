import React, { useRef } from 'react';

import './style.scss';

import { Props } from './interface';
import { title } from 'process';

const Input = ({ state, setState, ...props }: Props) => {
  const inputRef = useRef<HTMLInputElement>();
  const error = `${props.name}Error`;
  const enableInput = (event: React.FocusEvent<HTMLInputElement>) => {
    event.target.readOnly = false;
  };
  return (
    <div className="input">
      <input
        className="input__field"
        ref={inputRef}
        readOnly
        onFocus={enableInput}
        title={error}
        {...props}
      />
      <span
        className="input__status"
        role={`${props.name}-status`}
        title={props.title || 'Tudo certo'}>
        {props.title ? '🔴' : '🟢'}
      </span>
    </div>
  )
};

export default Input;