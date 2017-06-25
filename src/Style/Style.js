/**
 * Created by zzzz on 2017/6/3.
 */
// @flow
"use strict";

export default class Style {
    _strokeColor: string;
    _fillColor: string;

    constructor(strokeColor: ?string, fillColor: ?string) {
        this._strokeColor = '#000000';
        this._fillColor = '#ffffff';
        if (strokeColor) {
            this.strokeColor = strokeColor;
        }
        if (fillColor) {
            this.fillColor = fillColor;
        }
    }

    get strokeColor(): string {
        return this._strokeColor;
    }
    set strokeColor(value: string) {
        this._strokeColor = value;
    }
    get fillColor(): string {
        return this._fillColor;
    }
    set fillColor(value: string) {
        this._fillColor = value;
    }
}