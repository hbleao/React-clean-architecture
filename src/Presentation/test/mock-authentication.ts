import { Authentication, AuthenticationParams } from '@/domain/useCases';
import { AccountModel } from '@/domain/models';
import { mockAccountModel } from '@/domain/test';

export class AuthenticationSpy implements Authentication {
  public account = mockAccountModel();
  public params: AuthenticationParams;
  public callsCount = 0;

  async auth(params: AuthenticationParams): Promise<AccountModel> {
    this.params = params;
    this.callsCount++;

    return Promise.resolve(this.account);
  }
}
