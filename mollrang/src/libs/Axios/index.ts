import axios, {AxiosInstance, AxiosResponse, AxiosRequestConfig} from "axios";
import {
  AuthorizationException,
  ForbiddenException,
  NotAllowedMethodException,
  NotFoundException,
} from "@utils/error/errorHandler";
import {LOCAL_HOST_API, PRODUCT_HOST_API, IS_PRODUCTION} from "@config/index";

const baseURL = IS_PRODUCTION ? PRODUCT_HOST_API : LOCAL_HOST_API;
const instance: AxiosInstance = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 20000,
  withCredentials: true,
});

export interface RequestConfig extends AxiosRequestConfig {
  suppressStatusCode?: number[];
}

function AxiosAuthInterceptor<T>(response: AxiosResponse<T>): AxiosResponse {
  if (!response) throw new NotFoundException();

  const status = response.status;
  if (status === 401) throw new AuthorizationException();
  if (status === 403) throw new ForbiddenException();
  if (status === 404) throw new NotFoundException();
  if (status === 405) throw new NotAllowedMethodException();
  return response;
}

instance.interceptors.request.use(
  (config) => {
    config.headers["Content-type"] = "application/json; charset=UTF-8";
    config.headers["Accept"] = "application/json";
    return config;
  },
  (error) => Promise.reject(error),
);

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const {response} = error;
    AxiosAuthInterceptor(response);
    return response;
  },
);
export const axiosInstance = instance;
