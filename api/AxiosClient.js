import axios from 'axios';
import { Platform } from 'react-native';

export const BASE_URL = 'https://jsonplaceholder.typicode.com'


export default class AxiosClient {
  static SUCCESS_STATUSES = [200, 201]; // readonly
  static SERVER_ERROR = 500; // readonly
  api; // AxiosInstance;

  constructor(config) {
    this.api = axios.create(config);
    this.api.defaults.baseURL = this.getDefaultBaseUrl ();
    this.api.defaults.headers.common['App-Platform'] = Platform.OS;
    this.api.defaults.headers.common['Content-Type'] = 'application/json';
  }

  getDefaultBaseUrl = () => {
    return 'https://jsonplaceholder.typicode.com';
  };

  get = config => {
    return this.api.get(config.url, config.config);
  };

  post = config => {
    return this.api.post(config.url, config.data, config.config);
  };

  put = config => {
    return this.api.put(config.url, config.data, config.config);
  };

  delete = config => {
    return this.api.delete(config.url, config.config);
  };

}
