import React from 'react';

import { makeAutoObservable } from "mobx";

class MobxClicker{
    count = 0;

    constructor() {
        makeAutoObservable(this)
    };

    actionClick = () => {
        this.setCount(++this.count);
    };

    resetClick = () => {
        this.setCount(0)
    }

    setCount = value => {
        this.count = value;
    };

    get doubleCount() {
        return this.count * 2;
    }
}

export const mobxClicker = new MobxClicker()
