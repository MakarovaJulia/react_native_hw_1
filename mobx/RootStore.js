import React from "react";
import {ClickerStore} from "./clicker/ClickerStore";
import {TodosStore} from "./todos/TodosStore";

class RootStore {
    clickerStore;
    todosStore;

    constructor() {
        this.clickerStore = new ClickerStore();
        this.todosStore = new TodosStore();
    }
}

export const rootStore = new RootStore();

export const storesContext = React.createContext(rootStore)
