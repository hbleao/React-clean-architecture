import axios from 'axios';

import { HttpPostParams } from "@/Data/protocols/http";

export class AxiosHttpClient {
  async post(params: HttpPostParams<any>): Promise<void> {
    await axios(params.url);
  }
}