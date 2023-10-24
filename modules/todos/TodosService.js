import React from 'react';
import TodosRepository from './TodosRepository';
import { TodosModel } from './TodosModel';

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
     * @param value
     * @returns {TodosModel}
     */
    addTodo = (model, value) => {
        model.todoList.push(value);
        return model;
    }

    /**
     * @param model TodosModel
     * @param index
     * @returns {TodosModel}
     */
    deleteTodo = (model, index) => {
        model.todoList.splice(index, 1)
        return model;
    }


    /**
     * @param model TodosModel
     * @param index
     * @returns {TodosModel}
     */
    changeTodo = (model, index) => {
        model.todoList[index].completed = !model.todoList[index].completed;
        return model;
    }


    /**
     * @param model TodosModel
     * @returns {TodosModel}
     */
    getCompletedTodo = (model) => {
        return model.filter((item) => item.completed);
    }
}
