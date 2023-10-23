import React from "react";
import TodosRepository from "./TodosRepository";
import {TodosModel} from "./TodosModel";

export default class TodosService {
    todosRepository;

    constructor() {
        this.todosRepository = new  TodosRepository();
    }

    /**
     * @returns {TodosModel}
     */
    getAndPrepareDataForStore = () => {
        const data = this.todosRepository.getDataFromExternalStorage();

        const model = new TodosModel();
        model.todoList = data.defaultTodoList;

        return model;
    }

    /**
     * @param model TodosModel
     * @returns {TodosModel}
     */
    addTodo = (model, value) => {
        model.todoList.push(value);
        return model;
    }

    /**
     * @param model TodosModel
     * @returns {TodosModel}
     */
    deleteTodo = (model, index) => {
        console.log("deleteTodo " + model)
        model.todoList.splice(index, 1)
        return model;
    }


    /**
     * @param model TodosModel
     * @returns {TodosModel}
     */
    changeTodo = (model, index) => {
        console.log("changeTodo " + model.todoList[index])
        model.todoList[index].completed = !model.todoList[index].completed;
        return model;
    }
}
