import faker from 'faker';
import { InvalidFieldError } from "@/validation/errors";
import { EmailValidation } from "@/validation/validators/email/email-validation";

const makeSut = () => new EmailValidation(faker.database.column());

describe('EmailValidation', () => {
  it('Should return error if email is invalid', () => {
    const sut = makeSut();
    const error = sut.validate(faker.random.word());
    expect(error).toEqual(new InvalidFieldError());
  });

  it('Should return error if email is valid', () => {
    const sut = makeSut();
    const error = sut.validate(faker.internet.email());
    expect(error).toBeFalsy();
  });

  it('Should return error if email is empty', () => {
    const sut = makeSut();
    const error = sut.validate('');
    expect(error).toBeFalsy();
  });
});