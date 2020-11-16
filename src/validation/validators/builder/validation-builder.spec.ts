import { RequiredFieldValidation } from "@/validation/validators";
import { ValidationBuilder } from './validation-builder';


describe('ValidationBuilder', () => {
  it('Sould return RequiredField Validation', () => {
    const validations = ValidationBuilder.field('any_field').require().build();
    expect(validations).toEqual([new RequiredFieldValidation('any_field')]);
  });
});
