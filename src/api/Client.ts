import axios, { AxiosRequestConfig } from "axios";
import { IClient } from "interfaces";
import { RequestData } from "types";

const apiUrl = import.meta.env.VITE_API_BACKEND_URL;

class Client implements IClient {
  get<T = any>(endpoint: string, params?: AxiosRequestConfig): Promise<T> {
    if (!endpoint.length) {
      console.error("Please provide valid endpoint.");
    }
    const fullUrl = this.constructPath(endpoint);

    return axios.get(fullUrl, params);
  }

  post<T = any, D = RequestData>(
    endpoint: string,
    data?: D,
    headers?: AxiosRequestConfig
  ): Promise<T> {
    if (!endpoint.length) {
      console.error("Please provide valid endpoint.");
    }

    const fullUrl = this.constructPath(endpoint);

    return axios.post(fullUrl, data, headers);
  }

  constructPath(endpoint: string) {
    if (!endpoint.length) {
      return "";
    }

    return apiUrl + endpoint;
  }
}

export default new Client();
