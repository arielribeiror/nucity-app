import AsyncStorage from "@react-native-async-storage/async-storage";
import axios, { Method } from "axios";

const URL = "https://transparencia.tce.sp.gov.br/api/json";

const instance = axios.create({
  baseURL: URL,
  timeout: 30000,
});

export const api = async (
  endpoint: string,
  httpMethod: Method,
  body?: any,
  newHeaders?: any
) => {
  const token = await AsyncStorage.getItem("token");

  let headers: any = newHeaders
    ? newHeaders
    : { "Content-type": "application/json" };

  if (token) {
    headers["Authorization"] = `Bearer${token}`;
  }

  return instance.request({
    url: endpoint,
    method: httpMethod,
    data: body ? body : "",
    headers: headers,
  });
};

const post = async (url: string, body: any, headers?: any) => {
  return api(url, "POST", body, headers);
};

const put = async (url: string, body: any, headers?: any) => {
  return api(url, "PUT", body, headers);
};

const get = async (url: string, headers?: any) => {
  return api(url, "GET", headers);
};

export { post, get, put };
