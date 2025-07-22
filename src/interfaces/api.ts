import { AxiosRequestConfig } from "axios";
import { RequestData } from "types";

export interface IClient {
  get<T = any>(endpoint: string, params?: AxiosRequestConfig): Promise<T>;

  post<T = any, D = RequestData>(
    endpoint: string,
    data?: D,
    headers?: AxiosRequestConfig
  ): Promise<T>;
}

export interface IClientResponse {}
