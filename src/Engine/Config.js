/**
 * Created by zzzz on 2017/6/3.
 */
// @flow
"use strict";
import typeUtil from '../utils/typeUtil';

export default class Config {
    _pointSize: number;
    _vectorArrowSize: number;
    _canvasDefaultWidth: number;
    _canvasDefaultHeight: number;
    _planeVectorSize: number;
    constructor() {
        this._pointSize = 3;
        this._vectorArrowSize = 5;
        this._canvasDefaultWidth = 300;
        this._canvasDefaultHeight = 200;
        this._planeVectorSize = 30;
    }

    get pointSize(): number {
        return this._pointSize;
    }
    set pointSize(value: number) {
        if (typeUtil.isRealNumber(value)) {
            this._pointSize = value;
        }
    }

    get vectorArrowSize(): number {
        return this._vectorArrowSize;
    }
    set vectorArrowSize(value: number) {
        if (typeUtil.isRealNumber(value)) {
            this._vectorArrowSize = value;
        }
    }

    get canvasDefaultWidth(): number {
        return this._canvasDefaultWidth;
    }
    set canvasDefaultWidth(value: number) {
        if (typeUtil.isRealNumber(value)) {
            this._canvasDefaultWidth = value;
        }
    }

    get canvasDefaultHeight(): number {
        return this._canvasDefaultHeight;
    }
    set canvasDefaultHeight(value: number) {
        if (typeUtil.isRealNumber(value)) {
            this._canvasDefaultHeight = value;
        }
    }

    get planeVectorSize(): number {
        return this._planeVectorSize;
    }
    set planeVectorSize(value: number) {
        if (typeUtil.isRealNumber(value)) {
            this._planeVectorSize = value;
        }
    }
}