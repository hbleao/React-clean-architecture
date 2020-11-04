import { HttpStatusCode } from "@/Data/protocols/http/http-response";
import { HttpPostClient } from "Data/protocols/http/http-post-client";
import { Authentication, AuthenticationParams } from "Domain/useCases/authentication";
import { AccountModel } from "@/Domain/models/account-model";
import { InvalidCredentialsError } from "@/Domain/errors/invalid-credentials-error";
import { UnexpectedError } from "@/Domain/errors/unexpected-error";

export class RemoteAuthentication implements Authentication {
  constructor(
    private readonly url: string,
    private readonly httpPostClient: HttpPostClient<AuthenticationParams, AccountModel>,
  ) { };

  async auth(params: AuthenticationParams): Promise<AccountModel> {
    const httpResponse = await this.httpPostClient.post({
      url: this.url,
      body: params
    });

    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok: return httpResponse.body;
      case HttpStatusCode.unathorized: throw new InvalidCredentialsError();
      default: throw new UnexpectedError();
    }
  }
};
