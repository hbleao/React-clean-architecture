import faker from 'faker';

import {
  RequiredFieldValidation,
  EmailValidation,
  MinLengthValidation
} from "@/validation/validators";
import { ValidationBuilder } from './validation-builder';


describe('ValidationBuilder', () => {
  it('Sould return RequiredField Validation', () => {
    const field = faker.database.column();
    const validations = ValidationBuilder.field(field).required().build();
    expect(validations).toEqual([new RequiredFieldValidation(field)]);
  });

  it('Should return EmailValidation', () => {
    const field = faker.database.column();
    const validators = ValidationBuilder.field(field).email().build();
    expect(validators).toEqual([new EmailValidation(field)]);
  });

  it('Should return MinLengthValidation', () => {
    const field = faker.database.column();
    const validators = ValidationBuilder.field(field).min(5).build();
    expect(validators).toEqual([new MinLengthValidation(field, 5)]);
  });

  it('Should return a list validations', () => {
    const field = faker.database.column();
    const validators = ValidationBuilder.field(field).required().min(5).email().build();
    expect(validators).toEqual([
      new RequiredFieldValidation(field),
      new MinLengthValidation(field, 5),
      new EmailValidation(field)
    ]);
  });
});
