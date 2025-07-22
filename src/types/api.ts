import { AxiosRequestConfig } from "axios";

export type RequestData = Record<string, any> | FormData | string | null;
export type RequestHeaders = Record<string, string>;
export type RequestParams = AxiosRequestConfig | null;