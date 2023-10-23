import React from "react";
import {makeAutoObservable} from "mobx";
import TodosService from "../../model/todos/TodosService";

export class TodosStore {
    todosModel = null;

    isLoading = false;

    todosService;

    constructor() {
        makeAutoObservable(this)

        this.todosService = new TodosService()
    }

    getTodoObjectFromService = () => {
        const model = this.todosService.getAndPrepareDataForStore();
        this.setTodosModel(model);
    }

    actionGetCompleted = (model) => {
        let completedTodos = this.todosService.getCompletedTodo(model)
        return completedTodos;
    }

    actionAdd = (value) => {
        this.setIsLoading(true);

        const model = this.todosService.addTodo(this.todosModel, value);
        console.log("action add" + value.text + " text")
        this.setTodosModel(model);
        this.setIsLoading(false)

    };

    actionChange = (index) => {
        this.setIsLoading(true);

        const model = this.todosService.changeTodo(this.todosModel, index);
        this.setTodosModel(model);
        this.setIsLoading(false)

    };


    actionDelete = (index) => {
        console.log("action delete " + this.todosModel)
        this.setIsLoading(true);

        const model = this.todosService.deleteTodo(this.todosModel, index);
        this.setTodosModel(model);
        this.setIsLoading(false)

    };

    setTodosModel = value => {
        this.todosModel = value;
    }

    setIsLoading = value => {
        this.isLoading = value;
    }
}
