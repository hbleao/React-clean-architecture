import faker from 'faker';

import { SetStorageMock } from '@/data/test/mock-storage';
import { LocalSaveAccessToken } from './local-save-access-token';

type SutTypes = {
  sut: LocalSaveAccessToken;
  setStorageMock: SetStorageMock;
};

const makeSut = (): SutTypes => {
  const setStorageMock = new SetStorageMock();
  const sut = new LocalSaveAccessToken(setStorageMock);

  return {
    setStorageMock,
    sut
  }
};

describe('LocalSaveAccessToken', () => {
  it('Should call setStorage with correct value', async () => {
    const accessToken = faker.random.uuid();
    const { sut, setStorageMock } = makeSut();

    await sut.save(accessToken);

    expect(setStorageMock.key).toBe('accessToken');
    expect(setStorageMock.value).toBe(accessToken);
  });
});