/**
 * Created by zzzz on 2017/6/3.
 */
"use strict";

export default class Style {
    constructor(strokeColor, fillColor) {
        this._strokeColor = '#000000';
        this._fillColor = '#ffffff';
        if (strokeColor) {
            this.strokeColor = strokeColor;
        }
        if (fillColor) {
            this.fillColor = fillColor;
        }
    }

    get strokeColor() {
        return this._strokeColor;
    }
    set strokeColor(value) {
        this._strokeColor = value;
    }
    get fillColor() {
        return this._fillColor;
    }
    set fillColor(value) {
        this._fillColor = value;
    }
}