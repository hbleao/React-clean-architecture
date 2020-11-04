import { HttpPostClient } from "Data/protocols/http/http-post-client";
import { RemoteAuthentication } from "./remote-authentication";

describe('RemoteAuthentication', () => {
  test('Should call httpPostClient with correct URl', async () => {
    const url = 'any_url';
    class HttpPostClientSpy implements HttpPostClient {
      url?: string;
      async post(url: string): Promise<void> {
        this.url = url;
        return Promise.resolve();
      }
    };
    const httpPostClientSpy = new HttpPostClientSpy();
    const sut = new RemoteAuthentication(url, httpPostClientSpy);
    await sut.auth();
    expect(httpPostClientSpy.url).toBe(url)
  })
})