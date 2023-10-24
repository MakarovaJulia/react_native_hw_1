import React from "react";

export default class ClickerRepository {
    /**
     * @returns {{defaultCount: number}}
     */
    getDataFromExternalStorage = () => {
        return {
            defaultCount: 0,
        };
    };
}
