import React from "react";
import {ClickerStore} from "./ClickerStore";
import {TodosStore} from "./TodosStore";
import { NewsStore } from './NewsStore';

class RootStore {
    clickerStore;
    todosStore;
    newsStore;

    constructor() {
        this.clickerStore = new ClickerStore();
        this.todosStore = new TodosStore();
        this.newsStore = new NewsStore();
    }
}

export const rootStore = new RootStore();

export const storesContext = React.createContext(rootStore)
