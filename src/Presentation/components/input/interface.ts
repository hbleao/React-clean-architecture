import React from 'react';

type Props = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

export interface InputProps extends Props {
  error?: boolean;
  title?: string;
  roleError?: string;
}