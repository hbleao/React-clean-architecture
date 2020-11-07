import React from 'react';
import { render, screen } from '@testing-library/react';
import Login from './index';

const makeSut = () => {
  const sut = render(<Login />);
  return { sut };
}

describe('Login Component', () => {
  it('Should not render spinner and error on start', () => {
    makeSut();
    const formStatus = screen.getByRole('formStatus');
    expect(formStatus.childElementCount).toBe(0);
  });

  it('Should not render button with enable state', () => {
    makeSut();
    const submitButton = screen.getByRole('button') as HTMLButtonElement;
    expect(submitButton.disabled).toBe(true);
  });

  it('Should render all inputs with madatory filling', () => {
    makeSut();
    const inputEmail = screen.getByRole('email');
    expect(inputEmail.title).toBe('Campo obrigatório');
    expect(inputEmail.textContent).toBe('🔴');
    const inputPassword = screen.getByRole('password');
    expect(inputPassword.title).toBe('Campo obrigatório');
    expect(inputPassword.textContent).toBe('🔴');
  });


})