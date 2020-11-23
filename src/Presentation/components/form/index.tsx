import React from 'react';

import './style.scss';

import { FormProps } from '@/presentation/components/form/interface';

const Form = ({ handleSubmit, role, children }: FormProps) => {
  return (
    <form role={role} className="form" onSubmit={handleSubmit}>
      {children}
    </form>
  )
};

export default Form;