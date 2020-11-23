import React from 'react';
import { Router } from 'react-router';
import { createMemoryHistory } from 'history';
import { render, fireEvent, RenderResult, cleanup, waitFor } from '@testing-library/react';
import faker from 'faker';
import 'jest-localstorage-mock';

import { Login } from '@/presentation/pages';

import { ValidationStub, AuthenticationSpy } from '@/presentation/test';
import { InvalidCredentialsError } from '@/domain/errors';

type SutTypes = {
  sut: RenderResult;
  authenticationSpy: AuthenticationSpy
};

type Params = {
  validationError?: string;
}

const history = createMemoryHistory({ initialEntries: ['/login'] });
const makeSut = (params?: Params): SutTypes => {
  const validationStub = new ValidationStub();
  const authenticationSpy = new AuthenticationSpy();

  validationStub.errorMessage = params?.validationError;

  const sut = render(
    <Router history={history}>
      <Login validation={validationStub} authentication={authenticationSpy} />
    </Router>
  );

  return {
    sut,
    authenticationSpy
  };
};

const simulateValidSubmit = async (
  sut: RenderResult,
  email = faker.internet.email(),
  password = faker.internet.password()
): Promise<void> => {
  populateEmailField(sut, email);
  populatePasswordField(sut, password);
  const form = sut.getByRole('form');
  fireEvent.submit(form);
  await waitFor(() => form);
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

function testStatusForField(sut: RenderResult, fieldName: string, validationError?: string): void {
  const fieldStatus = sut.getByRole(`${fieldName}-status`);
  expect(fieldStatus.title).toBe(validationError || 'Tudo certo');
  expect(fieldStatus.textContent).toBe(validationError ? '🔴' : '🟢');
}

describe('Login Component', () => {

  afterEach(cleanup);

  beforeEach(localStorage.clear);

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
    testStatusForField(sut, 'email', validationError);
  });

  it('Should show password error if Validation fails', () => {
    const validationError = faker.random.words();
    const { sut } = makeSut({ validationError });
    populatePasswordField(sut);
    testStatusForField(sut, 'password', validationError);
  });

  it('Should show valid email state if Validation success', () => {
    const { sut } = makeSut();
    populateEmailField(sut);
    testStatusForField(sut, 'email');
  });

  it('Should show valid password state if Validation success', () => {
    const { sut } = makeSut();
    populatePasswordField(sut);
    testStatusForField(sut, 'password');
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

  it('Should enable submit button if form is valid', async () => {
    const { sut } = makeSut();
    await simulateValidSubmit(sut);
    const spinner = sut.getByRole('spinner');
    expect(spinner).toBeTruthy();
  });

  it('Should call Authentication with correct values', async () => {
    const { sut, authenticationSpy } = makeSut();
    const email = faker.internet.email();
    const password = faker.internet.password();
    await simulateValidSubmit(sut, email, password);

    expect(authenticationSpy.params).toEqual({
      email,
      password
    });
  });

  it('Should call Authentication if form is invalid', async () => {
    const validationError = faker.random.words();
    const { sut, authenticationSpy } = makeSut({ validationError });
    await simulateValidSubmit(sut);

    expect(authenticationSpy.callsCount).toBe(0);
  });

  it('Should present error if Authentication fails', async () => {
    const { sut, authenticationSpy } = makeSut();
    const error = new InvalidCredentialsError();

    jest.spyOn(authenticationSpy, 'auth').mockReturnValueOnce(Promise.reject(error));

    await simulateValidSubmit(sut);

    const mainError = sut.getByRole('error-message');

    expect(mainError.textContent).toBe(error.message);
  });

  it('Should add accessToken to localStorage on success', async () => {
    const { sut, authenticationSpy } = makeSut();
    const form = sut.getByRole('form');

    await simulateValidSubmit(sut);

    expect(localStorage.setItem).toHaveBeenCalledWith('accessToken', authenticationSpy.account.accessToken);
    expect(history.length).toBe(1);
    expect(history.location.pathname).toBe('/');
  });

  it('Should go to signup page', async () => {
    const { sut } = makeSut();
    const register = sut.getByRole('signup');

    fireEvent.click(register);

    expect(history.length).toBe(2);
    expect(history.location.pathname).toBe('/signup');
  });

});