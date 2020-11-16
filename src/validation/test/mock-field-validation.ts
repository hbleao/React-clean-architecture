import { FieldValidation } from "../protocols/required-field-validation";

export class ValidationSpy implements FieldValidation {
  error: Error = null;
  constructor(readonly field: string) { };

  validate(value: string): Error {
    return this.error;
  }
};
