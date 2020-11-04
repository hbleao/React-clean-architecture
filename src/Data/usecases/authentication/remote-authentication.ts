import { HttpStatusCode, HttpPostClient } from "@/Data/protocols/http";
import { Authentication, AuthenticationParams } from "Domain/useCases/authentication";
import { AccountModel } from "@/Domain/models";
import { InvalidCredentialsError, UnexpectedError } from "@/Domain/errors";

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
      case HttpStatusCode.unauthorized: throw new InvalidCredentialsError();
      default: throw new UnexpectedError();
    }
  }
};
