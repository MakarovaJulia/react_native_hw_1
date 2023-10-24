import React from "react";

export default class TodosRepository {

    /**
     * @returns {{defaultTodoList: []}}
     */
    getDataFromExternalStorage = () => {
        return {
            defaultTodoList: [],
        };
    };
}
