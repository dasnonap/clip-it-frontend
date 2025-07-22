import { RequestParams, RequestHeaders, RequestData } from "types";

export interface IClient {
   get<T = any, P = RequestParams, H = RequestHeaders>(endpoint: string, params?: P, headers?: H): Promise<T>;
   post<T = any, D = RequestData, H = RequestHeaders>(endpoint: string, data?: D, headers?: H): Promise<T>;
}

export interface IClientResponse {

}