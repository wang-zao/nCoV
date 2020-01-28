import axios, { AxiosInstance, AxiosResponse } from 'axios';

interface ApiClient extends AxiosInstance {
  fallbackSuccessHandler?: (res: AxiosResponse<any>) => any,
}

const apiClient : ApiClient = axios.create({
  baseURL: '/api',
});

apiClient.fallbackSuccessHandler = (res) => res.data;

export default apiClient ;
