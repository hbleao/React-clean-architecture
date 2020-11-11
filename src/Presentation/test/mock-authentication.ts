import { Authentication, AuthenticationParams } from '@/Domain/useCases';
import { AccountModel } from '@/Domain/models';
import { mockAccountModel } from '@/Domain/test';

export class AuthenticationSpy implements Authentication {
  public account = mockAccountModel();
  public params: AuthenticationParams;

  async auth(params: AuthenticationParams): Promise<AccountModel> {
    this.params = params;
    return Promise.resolve(this.account);
  }
}
