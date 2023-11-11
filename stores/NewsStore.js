import React from "react";
import {makeAutoObservable} from "mobx";
import NewsService from "../modules/news/NewsService";
import LocalRepository from '../api/LocalRepository';

export class NewsStore {
  news = [];

  isLoading = true;

  newsService;

  localRepository;

  constructor() {
    makeAutoObservable(this)

    this.newsService = new NewsService()
    this.localRepository = new LocalRepository('News')
  }

  // ACTION
  getNews = () => {
    this.setIsLoading(true);
    this.newsService
      .getNews()
      .then(result => {
        this.localRepository.setItems(result)
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

  deleteNewsFromLocal = async () => {
    this.localRepository.removeAll();
    this.setNews(await this.localRepository.getItems() ?? [])
  }
}
