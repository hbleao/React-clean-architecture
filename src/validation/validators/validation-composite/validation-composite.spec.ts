import faker from 'faker';

import { ValidationSpy } from "@/validation/test";
import { ValidationComposite } from "@/validation/validators";

type SutTypes = {
  sut: ValidationComposite;
  fieldValidationsSpy: ValidationSpy[];
};

const makeSut = (fieldName): SutTypes => {
  const fieldValidationsSpy = [
    new ValidationSpy(fieldName),
    new ValidationSpy(fieldName)
  ];

  const sut = ValidationComposite.build(fieldValidationsSpy);
  return {
    sut,
    fieldValidationsSpy
  };
};

describe('ValidationComposite', () => {
  it('Should return error if any validation fails', () => {
    const fieldName = faker.database.column();
    const errorMessage = faker.random.words();

    const { sut, fieldValidationsSpy } = makeSut(fieldName);

    fieldValidationsSpy[0].error = new Error(errorMessage);
    fieldValidationsSpy[1].error = new Error(faker.random.word());

    const error = sut.validate(fieldName, faker.random.word());
    expect(error).toBe(error);
  });

  it('Should not return error if any validation', () => {
    const fieldName = faker.database.column();

    const { sut } = makeSut(fieldName);
    const error = sut.validate('any_field', 'any_value');
    expect(error).toBeFalsy();
  });
});