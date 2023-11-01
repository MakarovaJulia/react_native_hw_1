import React from "react";
import {makeAutoObservable} from "mobx";
import NewsService from "../modules/news/NewsService";

export class NewsStore {
  news = null;

  isLoading = true;

  newsService;

  constructor() {
    makeAutoObservable(this)

    this.newsService = new NewsService()
  }

  // ACTION
  getNews = () => {
    this.setIsLoading(true);
    this.newsService
      .getNews()
      .then(result => {
        this.setNews(result);
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => {
        this.setIsLoading(false);
        console.log(this.isLoading)
      });
  };

  setNews = value => {
    this.news = value;
  }

  setIsLoading = value => {
    this.isLoading = value;
  }
}
