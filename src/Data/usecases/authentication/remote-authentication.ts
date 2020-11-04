import { HttpStatusCode } from "@/Data/protocols/http/http-response";
import { InvalidCredentialsError } from "@/Domain/errors/invalid-credentials-error";
import { HttpPostClient } from "Data/protocols/http/http-post-client";
import { AuthenticationParams } from "Domain/useCases/authentication";

export class RemoteAuthentication {
  constructor(
    private readonly url: string,
    private readonly httpPostClient: HttpPostClient,
  ) { };

  async auth(params: AuthenticationParams): Promise<void> {
    const httpResponse = await this.httpPostClient.post({
      url: this.url,
      body: params
    });

    switch (httpResponse.statusCode) {
      case HttpStatusCode.unathorized: throw new InvalidCredentialsError();
      default: HttpStatusCode.success;
    }
  }
};
