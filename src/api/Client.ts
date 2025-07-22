import axios, { AxiosRequestConfig } from "axios";
import { IClient } from "interfaces";
import { RequestData } from "types";
const apiUrl = import.meta.env.VITE_API_BACKEND_URL;

class Client implements IClient {
  get<T = any>(endpoint: string, params?: AxiosRequestConfig): Promise<T> {
    if (!endpoint.length) {
      console.error("Please provide valid endpoint.");
      // return;
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
      // return;
    }

    const fullUrl = this.constructPath(endpoint);
    console.log(fullUrl, apiUrl);
    return axios.post(fullUrl, data, headers);
  }

  constructPath(endpoint: string) {
    if (!endpoint.length) {
      return "";
    }

    // const [domain, path] = endpoint.split(".");
    // let apiPath = "";

    // if (domain && domain.length) {
    //   if (path && path.length) {
    //     apiPath = this.endpoints[domain][path];
    //   } else if (this.endpoints[domain]["index"].length > 0) {
    //     apiPath = this.endpoints[domain]["index"];
    //   }
    // }

    return apiUrl + endpoint;
  }

  // constructPath(endpoint) {
  //   if (!endpoint.length) {
  //     return "";
  //   }

  //   const [domain, path] = endpoint.split(".");
  //   let apiPath = "";

  //   if (domain && domain.length) {
  //     if (path && path.length) {
  //       apiPath = this.endpoints[domain][path];
  //     } else if (this.endpoints[domain]["index"].length > 0) {
  //       apiPath = this.endpoints[domain]["index"];
  //     }
  //   }

  //   return apiUrl + apiPath;
  // }
}

export default new Client();
