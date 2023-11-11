import NewsRepository from './NewsRepository';


export default class NewsService {

  newsRepository; // private

  constructor() {
    this.newsRepository = new NewsRepository();
  }

  getNews = async () => {
    const res = await this.newsRepository.getNews();
    return res.data.slice(0, 10);
  };
}
