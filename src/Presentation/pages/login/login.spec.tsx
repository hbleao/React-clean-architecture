import React from 'react';
import { render, fireEvent, RenderResult, cleanup } from '@testing-library/react';
import faker, { fake } from 'faker';

import Login from './index';

import { ValidationStub, AuthenticationSpy } from '@/Presentation/test';

type SutTypes = {
  sut: RenderResult;
  authenticationSpy: AuthenticationSpy
};

type Params = {
  validationError?: string;
}

const makeSut = (params?: Params): SutTypes => {
  const validationStub = new ValidationStub();
  const authenticationSpy = new AuthenticationSpy();

  validationStub.errorMessage = params?.validationError;

  const sut = render(<Login validation={validationStub} authentication={authenticationSpy} />);

  return {
    sut,
    authenticationSpy
  };
};

const simulateValidSubmit = (
  sut: RenderResult,
  email = faker.internet.email(),
  password = faker.internet.password()
): void => {
  populateEmailField(sut, email);
  populatePasswordField(sut, password);
  const submitButton = sut.getByRole('button') as HTMLButtonElement;
  fireEvent.click(submitButton);
};


const populateEmailField = (
  sut: RenderResult,
  email = faker.internet.email(),
): void => {
  const emailInput = sut.getByRole('email');
  fireEvent.input(emailInput, { target: { value: email } });
};

const populatePasswordField = (
  sut: RenderResult,
  password = faker.internet.password(),
): void => {
  const passwordInput = sut.getByRole('password');
  fireEvent.input(passwordInput, { target: { value: password } });
};

const simulateSatusForField = (sut: RenderResult, fieldName: string, validationError?: string): void => {
  const fieldStatus = sut.getByRole(`${fieldName}-status`);
  expect(fieldStatus.title).toBe(validationError || 'Tudo certo');
  expect(fieldStatus.textContent).toBe(validationError ? '🔴' : '🟢');
};

describe('Login Component', () => {

  afterEach(cleanup);

  it('Should not render spinner and error on start', () => {
    const validationError = faker.random.words();
    const { sut } = makeSut({ validationError });
    const formStatus = sut.getByRole('form-status');
    expect(formStatus.childElementCount).toBe(0);
  });

  it('Should not render button with enable state', () => {
    const validationError = faker.random.words();
    const { sut } = makeSut({ validationError });
    const submitButton = sut.getByRole('button') as HTMLButtonElement;
    expect(submitButton.disabled).toBe(true);
  });

  it('Should show email error if Validation fails', () => {
    const validationError = faker.random.words();
    const { sut } = makeSut({ validationError });
    populateEmailField(sut);
    simulateSatusForField(sut, 'email', validationError);
  });

  it('Should show password error if Validation fails', () => {
    const validationError = faker.random.words();
    const { sut } = makeSut({ validationError });
    populatePasswordField(sut);
    simulateSatusForField(sut, 'password', validationError);
  });

  it('Should show valid email state if Validation success', () => {
    const { sut } = makeSut();
    populateEmailField(sut);
    simulateSatusForField(sut, 'email');
  });

  it('Should show valid password state if Validation success', () => {
    const { sut } = makeSut();
    populatePasswordField(sut);
    simulateSatusForField(sut, 'password');
  });

  it('Should enable submit button if form is valid', () => {
    const { sut } = makeSut();

    const emailInput = sut.getByRole('email');
    fireEvent.input(emailInput, { target: faker.internet.email() });

    const passwordInput = sut.getByRole('password');
    fireEvent.input(passwordInput, { target: faker.internet.password() });

    const submitButton = sut.getByRole('button') as HTMLButtonElement;
    expect(submitButton.disabled).toBe(false);
  });

  it('Should enable submit button if form is valid', () => {
    const { sut } = makeSut();
    simulateValidSubmit(sut);
    const spinner = sut.getByRole('spinner');
    expect(spinner).toBeTruthy();
  });

  it('Should call Authentication with correct values', () => {
    const { sut, authenticationSpy } = makeSut();
    const email = faker.internet.email();
    const password = faker.internet.password();
    simulateValidSubmit(sut, email, password);

    expect(authenticationSpy.params).toEqual({
      email,
      password
    });
  });
});