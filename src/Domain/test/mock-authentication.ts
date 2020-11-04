import faker from 'faker';

import { AuthenticationParams } from "Domain/useCases/authetication";

export const mockAuthentication = (): AuthenticationParams => ({
  email: faker.internet.email(),
  password: faker.internet.password()
})