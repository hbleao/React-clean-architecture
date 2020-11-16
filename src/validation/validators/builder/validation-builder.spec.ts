import {
  RequiredFieldValidation,
  EmailValidation,
  MinLengthValidation
} from "@/validation/validators";
import { ValidationBuilder } from './validation-builder';


describe('ValidationBuilder', () => {
  it('Sould return RequiredField Validation', () => {
    const validations = ValidationBuilder.field('any_field').require().build();
    expect(validations).toEqual([new RequiredFieldValidation('any_field')]);
  });

  it('Should return EmailValidation', () => {
    const validators = ValidationBuilder.field('any_field').email().build();
    expect(validators).toEqual([new EmailValidation('any_field')]);
  });

  it('Should return MinLengthValidation', () => {
    const validators = ValidationBuilder.field('any_field').min(5).build();
    expect(validators).toEqual([new MinLengthValidation('any_field', 5)]);
  });
});
