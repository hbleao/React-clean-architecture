import { Validation } from '@/Presentation/protocols/validation';

export class ValidationStub implements Validation {
  public errorMessage: string;

  validate(fieldName: string, fieldValue: string): string {
    return this.errorMessage;
  };
};
