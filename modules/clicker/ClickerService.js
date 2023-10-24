import React from "react";
import ClickerRepository from "./ClickerRepository";
import {ClickerModel} from "./ClickerModel";

export default class ClickerService {
    clickerRepository;

    constructor() {
        this.clickerRepository = new  ClickerRepository();
    }

    /**
     * @returns {ClickerModel}
     */
    getAndPrepareDataForStore = () => {
        const data = this.clickerRepository.getDataFromExternalStorage();

        const model = new ClickerModel();
        model.count = data.defaultCount;

        return model;
    }

    /**
     * @param model ClickerModel
     * @returns {ClickerModel}
     */
    incrementCountValue = model => {
        model.count++;
        return model;
    }
}
