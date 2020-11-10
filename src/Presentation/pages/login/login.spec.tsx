import React from 'react';
import { render, fireEvent, RenderResult, cleanup } from '@testing-library/react';
import faker from 'faker';

import Login from './index';

import { ValidationStub } from '@/Presentation/test';

type SutTypes = {
  sut: RenderResult;
  validationStub: ValidationStub;
};

const makeSut = (): SutTypes => {
  const validationStub = new ValidationStub();
  validationStub.errorMessage = faker.random.words();
  const sut = render(<Login validation={validationStub} />);

  return {
    sut,
    validationStub
  };
};

describe('Login Component', () => {

  beforeEach(cleanup);

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

  it('Should render all inputs with madatory filling', () => {
    const { sut, validationStub } = makeSut();
    const emailStatus = sut.getByRole('email-status');
    const passwordStatus = sut.getByRole('password-status');

    expect(emailStatus.title).toBe(validationStub.errorMessage);
    expect(emailStatus.textContent).toBe('🔴');

    expect(passwordStatus.title).toBe(validationStub.errorMessage);
    expect(passwordStatus.textContent).toBe('🔴');
  });

  it('Should show email error if Validation fails', () => {
    const { sut, validationStub } = makeSut();
    const emailInput = sut.getByRole('email');
    const emailStatus = sut.getByRole('email-status');

    fireEvent.input(emailInput, { target: faker.internet.email() });

    expect(emailStatus.title).toBe(validationStub.errorMessage);
    expect(emailStatus.textContent).toBe('🔴');
  });
});