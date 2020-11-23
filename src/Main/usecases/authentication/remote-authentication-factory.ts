import { makeAxiosHttpClient, makeApiUrl } from '@/main/factories/http';
import { RemoteAuthentication } from '@/data/usecases/authentication/remote-authentication';
import { Authentication } from '@/domain/useCases';

export const makeRemoteAuthentication = (): Authentication => {
  return new RemoteAuthentication(makeApiUrl('/login'), makeAxiosHttpClient());
};