import faker from 'faker';

import { AuthenticationParams } from "@/Domain/useCases";
import { AccountModel } from '../models';

export const mockAuthentication = (): AuthenticationParams => ({
  email: faker.internet.email(),
  password: faker.internet.password()
});

export const mockAccountModel = (): AccountModel => ({
  accessToekn: faker.random.uuid()
})