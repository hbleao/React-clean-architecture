import React from 'react';
import { render, fireEvent, RenderResult } from '@testing-library/react';

import Login from './index';

import { Validation } from '@/Presentation/protocols/validation';

class ValidationSpy implements Validation {
  public errorMessage: string;
  public input: object;

  validate(input: object): string {
    this.input = input;
    return this.errorMessage;
  };
};

type SutTypes = {
  sut: RenderResult;
  validationSpy: ValidationSpy;
};

const makeSut = (): SutTypes => {
  const validationSpy = new ValidationSpy();
  const sut = render(<Login validation={validationSpy} />);

  return {
    sut,
    validationSpy
  };
};

describe('Login Component', () => {

  it('Should not render spinner and error on start', () => {
    const { sut } = makeSut();
    const formStatus = sut.getByRole('formStatus');
    expect(formStatus.childElementCount).toBe(0);
  });

  it('Should not render button with enable state', () => {
    const { sut } = makeSut();
    const submitButton = sut.getByRole('button') as HTMLButtonElement;
    expect(submitButton.disabled).toBe(true);
  });

  it('Should render all inputs with madatory filling', () => {
    const { sut } = makeSut();
    const inputEmail = sut.getByRole('emailError');
    expect(inputEmail.title).toBe('Campo obrigatório');
    expect(inputEmail.textContent).toBe('🔴');
    const inputPassword = sut.getByRole('passwordError');
    expect(inputPassword.title).toBe('Campo obrigatório');
    expect(inputPassword.textContent).toBe('🔴');
  });

  it('Should call Validation with correct email', () => {
    const { sut, validationSpy } = makeSut();
    const inputEmail = sut.getByRole('email');

    fireEvent.input(inputEmail, { target: { value: 'any_email' } });
    expect(validationSpy.input).toEqual({ email: 'any_email' });
  });

  it('Should call Validation with correct password', () => {
    const { sut, validationSpy } = makeSut();
    const inputPassword = sut.getByRole('password');

    fireEvent.input(inputPassword, { target: { value: 'any_password' } });
    expect(validationSpy.input).toEqual({ password: 'any_password' });
  });
});