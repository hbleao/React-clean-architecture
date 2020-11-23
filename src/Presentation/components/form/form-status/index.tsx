import React from 'react';

import './style.scss';

import Spiner from '@/presentation/components/spinner';

import { UiFormStatusProps } from '@/presentation/components/form/form-status/interface';

const UiFormStatus = ({ isLoading, errorMessage, role, roleSpinner, roleError }: UiFormStatusProps) => {
  return (
    <div className="formStatus" role={role}>
      {isLoading && <Spiner role={roleSpinner} className="formStatus__spinner" />}
      {errorMessage && <span role={roleError} className="formStatus__error">{errorMessage}</span>}
    </div>
  )
};



export default UiFormStatus;