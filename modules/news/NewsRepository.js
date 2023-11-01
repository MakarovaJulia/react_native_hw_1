import AxiosClient from '../../api/AxiosClient';


export default class NewsRepository {

  apiClient = null;

  constructor() {
    this.apiClient = new AxiosClient();
  }

  getNews = () => {
    return this.apiClient.get({ url: '/posts' });
  };

  changeNews = (item) => {
    return this.apiClient.post({
      url: '/posts/1',
      data: item
    });
  };
}
