import faker from 'faker';

import { HttpPostClientSpy } from "@/Data/test/mock-http-client";
import { mockAuthentication } from '@/Domain/test/mock-authentication';
import { RemoteAuthentication } from "./remote-authentication";

interface SutTypes {
  sut: RemoteAuthentication;
  httpPostClientSpy: HttpPostClientSpy;
}

const makeSut = (url: string = 'any_url'): SutTypes => {
  const httpPostClientSpy = new HttpPostClientSpy();
  const sut = new RemoteAuthentication(url, httpPostClientSpy);
  return {
    sut,
    httpPostClientSpy
  }
};

describe('RemoteAuthentication', () => {
  test('Should call httpPostClient with correct URl', async () => {
    const url = faker.internet.url();
    const { sut, httpPostClientSpy } = makeSut(url);
    await sut.auth(mockAuthentication());
    expect(httpPostClientSpy.url).toBe(url);
  });

  test('Should call httpPostClient with correct body', async () => {
    const { sut, httpPostClientSpy } = makeSut();
    const authenticationParams = mockAuthentication();
    await sut.auth(authenticationParams);
    expect(httpPostClientSpy.body).toEqual(authenticationParams);
  });
});