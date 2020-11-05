import axios from 'axios';

import { HttpPostParams, HttpResponse, HttpPostClient } from "@/Data/protocols/http";

export class AxiosHttpClient implements HttpPostClient<any, any> {
  async post({ url, body }: HttpPostParams<any>): Promise<HttpResponse<any>> {
    const httpResponse = await axios.post(url, body);
    return {
      statusCode: httpResponse.status,
      body: httpResponse.data,
    }
  }
}