import React from 'react';
import { render, screen } from '@testing-library/react';
import Login from './index';

describe('Login Component', () => {
  it('Should not render spinner and error on start', () => {
    render(<Login />);
    const formStatus = screen.getByRole('formStatus');
    expect(formStatus.childElementCount).toBe(0);
  });

  it('Should not render button with enable state', () => {
    render(<Login />);
    const submitButton = screen.getByRole('button') as HTMLButtonElement;
    expect(submitButton.disabled).toBe(true);
  });

  it('Should render all inputs with madatory filling', () => {
    render(<Login />);
    const inputEmail = screen.getByRole('email');
    expect(inputEmail.title).toBe('Campo obrigatório');
    expect(inputEmail.textContent).toBe('🔴');
    const inputPassword = screen.getByRole('password');
    expect(inputPassword.title).toBe('Campo obrigatório');
    expect(inputPassword.textContent).toBe('🔴');
  });


})