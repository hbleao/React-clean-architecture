import React from 'react';
import { render, fireEvent, RenderResult, cleanup } from '@testing-library/react';
import faker from 'faker';

import Login from './index';

import { ValidationStub } from '@/Presentation/test';

type SutTypes = {
  sut: RenderResult;
  validationStub: ValidationStub;
};

const makeSut = (caseError?: boolean): SutTypes => {
  const validationStub = new ValidationStub();
  validationStub.errorMessage = caseError ? null : faker.random.words();
  const sut = render(<Login validation={validationStub} />);

  return {
    sut,
    validationStub
  };
};

describe('Login Component', () => {

  afterEach(cleanup);

  it('Should not render spinner and error on start', () => {
    const { sut } = makeSut();
    const formStatus = sut.getByRole('form-status');
    expect(formStatus.childElementCount).toBe(0);
  });

  it('Should not render button with enable state', () => {
    const { sut } = makeSut();
    const submitButton = sut.getByRole('button') as HTMLButtonElement;
    expect(submitButton.disabled).toBe(true);
  });

  it('Should show email error if Validation fails', () => {
    const { sut, validationStub } = makeSut();
    const emailInput = sut.getByRole('email');
    const emailStatus = sut.getByRole('email-status');

    fireEvent.input(emailInput, { target: faker.internet.email() });

    expect(emailStatus.title).toBe(validationStub.errorMessage);
    expect(emailStatus.textContent).toBe('🔴');
  });

  it('Should show password error if Validation fails', () => {
    const { sut, validationStub } = makeSut();
    const passwordInput = sut.getByRole('password');
    const passwordStatus = sut.getByRole('password-status');

    fireEvent.input(passwordInput, { target: faker.internet.email() });

    expect(passwordStatus.title).toBe(validationStub.errorMessage);
    expect(passwordStatus.textContent).toBe('🔴');
  });

  it('Should show valid email state if Validation success', () => {
    const { sut, validationStub } = makeSut(true);
    const emailInput = sut.getByRole('email');
    const emailStatus = sut.getByRole('email-status');

    fireEvent.input(emailInput, { target: faker.internet.email() });

    expect(emailStatus.title).toBe('Tudo certo');
    expect(emailStatus.textContent).toBe('🟢');
  });

  it('Should show valid password state if Validation success', () => {
    const { sut, validationStub } = makeSut(true);
    const passwordInput = sut.getByRole('password');
    const passwordStatus = sut.getByRole('password-status');

    fireEvent.input(passwordInput, { target: faker.internet.password() });

    expect(passwordStatus.title).toBe('Tudo certo');
    expect(passwordStatus.textContent).toBe('🟢');
  });

  it('Should enable submit button if form is valid', () => {
    const { sut, validationStub } = makeSut(true);

    const emailInput = sut.getByRole('email');
    fireEvent.input(emailInput, { target: faker.internet.email() });

    const passwordInput = sut.getByRole('password');
    fireEvent.input(passwordInput, { target: faker.internet.password() });

    const submitButton = sut.getByRole('button') as HTMLButtonElement;
    expect(submitButton.disabled).toBe(false);
  });
});