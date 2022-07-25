import axios, { AxiosResponse } from "axios";
import { Birthday } from "../models/birthday";

const sleep = (delay: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
};

axios.defaults.baseURL = "http://localhost:5000/api";

axios.interceptors.response.use(async (response) => {
  try {
        await sleep(1000);
        return response;
    } catch (err) {
        console.log(err);
        return await Promise.reject(err);
    }
});

const responseBody = <T>(response: AxiosResponse<T>) => response.data;

const requests = {
  get: <T>(url: string) => axios.get<T>(url).then(responseBody),
  post: <T>(url: string, body: {}) =>
    axios.post<T>(url, body).then(responseBody),
  put: <T>(url: string, body: {}) => axios.put<T>(url, body).then(responseBody),
  del: <T>(url: string) => axios.delete<T>(url).then(responseBody),
};

const Birthdays = {
  list: () => requests.get<Birthday[]>("/birthdays"),
  details: (id: string) => axios.get<Birthday>(`/birthdays/${id}`),
  create: (birthday: Birthday) => axios.post<void>("/birthdays", birthday),
  update: (birthday: Birthday) => axios.put<void>(`/birthdays/${birthday.id}`, birthday),
  delete: (id: string) => axios.delete<void>(`/birthdays/${id}`),
};

const agent = {
  Birthdays,
};

export default agent;
