import React from 'react';

import './style.scss';

import { FormProps } from './interface';

const Form = ({ handleSubmit, children }: FormProps) => {
  return (
    <form className="form" onSubmit={handleSubmit}>
      {children}
    </form>
  )
};

export default Form;