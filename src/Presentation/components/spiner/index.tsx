import React from 'react';

import './style.scss';

export interface SpinerProps {
  className?: string;
}

const Spiner = ({ className }: SpinerProps) => (
  <div className={className}>
    <div className="spiner">
      <div />
      <div />
      <div />
      <div />
    </div>
  </div>
);

export default Spiner;