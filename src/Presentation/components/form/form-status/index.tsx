import React from 'react';

import Spiner from '@/Presentation/components/spiner';

const FormStatus = () => {
  return (
    <div className="formStatus">
      <Spiner className="formStatus__spinner" />
      <span className="formStatus__error">Error</span>
    </div>
  )
};

export default FormStatus;