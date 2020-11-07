import React from 'react';

import './style.scss';

import Spiner from '@/Presentation/components/spinner';

import { UiFormStatusProps } from './interface';

const UiFormStatus = ({ isLoading, errorMessage }: UiFormStatusProps) => {
  return (
    <div className="formStatus" role="formStatus">
      {isLoading && <Spiner className="formStatus__spinner" />}
      {errorMessage && <span className="formStatus__error">{errorMessage}</span>}
    </div>
  )
};

export default UiFormStatus;