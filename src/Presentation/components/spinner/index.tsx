import React from 'react';

import './style.scss';

export interface SpinerProps {
  className?: string;
  role?: string;
}

const Spiner = ({ className, role }: SpinerProps) => (
  <div role={role} className={className}>
    <div className="spiner">
      <div />
      <div />
      <div />
      <div />
    </div>
  </div>
);

export default Spiner;