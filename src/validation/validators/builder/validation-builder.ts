import { FieldValidation } from "@/validation/protocols/required-field-validation";
import { RequiredFieldValidation } from "@/validation/validators";

export class ValidationBuilder {
  private constructor(
    private readonly fieldName: string,
    private readonly validations: FieldValidation[]
  ) { };

  static field(fieldName: string): ValidationBuilder {
    return new ValidationBuilder(fieldName, []);
  };

  require(): ValidationBuilder {
    this.validations.push(new RequiredFieldValidation(this.fieldName));
    return this;
  };

  build(): FieldValidation[] {
    return this.validations;
  }
};