import React from 'react';
import { render, fireEvent, RenderResult } from '@testing-library/react';
import faker from 'faker';

import Login from './index';

import { ValidationSpy } from '@/Presentation/test';

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
    const email = faker.internet.email();

    fireEvent.input(inputEmail, { target: { value: email } });

    expect(validationSpy.filedName).toBe('email');
    expect(validationSpy.fieldValue).toBe(email);
  });

  it('Should call Validation with correct password', () => {
    const { sut, validationSpy } = makeSut();
    const inputPassword = sut.getByRole('password');
    const password = faker.internet.password();

    fireEvent.input(inputPassword, { target: { value: password } });

    expect(validationSpy.filedName).toBe('password');
    expect(validationSpy.fieldValue).toBe(password);
  });
});