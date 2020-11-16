import { ValidationSpy } from "@/validation/test/mock-field-validation";
import { ValidationComposite } from "./validation-composite";


describe('ValidationComposite', () => {
  it('Should return error if any validation fails', () => {
    const validationSpy = new ValidationSpy('any_field');
    const validationSpy2 = new ValidationSpy('any_field');

    validationSpy.error = new Error('first_error_message');
    validationSpy2.error = new Error('second_error_message');

    const sut = new ValidationComposite([
      validationSpy,
      validationSpy2
    ]);

    const error = sut.validate('any_field', 'any_value');
    expect(error).toBe('first_error_message');
  });
});