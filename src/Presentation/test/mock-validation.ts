import { Validation } from '@/Presentation/protocols/validation';

export class ValidationStub implements Validation {
  public errorMessage: string;

  validate(filedName: string, fieldValue: string): string {
    return this.errorMessage;
  };
};
