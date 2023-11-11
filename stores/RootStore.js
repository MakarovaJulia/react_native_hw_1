import React from "react";
import {ClickerStore} from "./ClickerStore";
import {TodosStore} from "./TodosStore";
import { NewsStore } from './NewsStore';
import { LogsStore } from './LogsStore';

class RootStore {
    clickerStore;
    todosStore;
    newsStore;
    logsStore;

    constructor() {
        this.clickerStore = new ClickerStore();
        this.todosStore = new TodosStore();
        this.newsStore = new NewsStore();
        this.logsStore = new LogsStore();
    }
}

export const rootStore = new RootStore();

export const storesContext = React.createContext(rootStore)
