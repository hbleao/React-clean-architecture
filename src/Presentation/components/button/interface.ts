import { ButtonHTMLAttributes } from 'react';

type typeButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export interface ButtonProps extends typeButtonProps {
  className?: string;
  text?: string;
  appearence: 'primary' | 'second';
}
