/**
 * Created by zzzz on 2017/6/3.
 */
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

    get pointSize() {
        return this._pointSize;
    }
    set pointSize(value) {
        if (typeUtil.isRealNumber(value)) {
            this._pointSize = value;
        }
    }

    get vectorArrowSize() {
        return this._vectorArrowSize;
    }
    set vectorArrowSize(value) {
        if (typeUtil.isRealNumber(value)) {
            this._vectorArrowSize = value;
        }
    }

    get canvasDefaultWidth() {
        return this._canvasDefaultWidth;
    }
    set canvasDefaultWidth(value) {
        if (typeUtil.isRealNumber(value)) {
            this._canvasDefaultWidth = value;
        }
    }

    get canvasDefaultHeight() {
        return this._canvasDefaultHeight;
    }
    set canvasDefaultHeight(value) {
        if (typeUtil.isRealNumber(value)) {
            this._canvasDefaultHeight = value;
        }
    }

    get planeVectorSize() {
        return this._planeVectorSize;
    }
    set planeVectorSize(value) {
        if (typeUtil.isRealNumber(value)) {
            this._planeVectorSize = value;
        }
    }
}