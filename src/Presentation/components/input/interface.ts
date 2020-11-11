import React from 'react';

export type Props = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
  state?: any;
  setState?: any;
}
