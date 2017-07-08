/**
 * Created by zzzz on 2017/6/3.
 */
"use strict";
import GeometryBase from './GeometryBase';
import Point from './Point';
import GeometryType from '../constants/GeometryType';
import typeUtil from '../utils/typeUtil';
import arrayUtil from '../utils/arrayUtil';

export default class Line extends GeometryBase {
    constructor(startPt, endPt, plane) {
        super(plane);
        if (startPt) {
            this.startPt = startPt;
        }
        if (endPt) {
            this.endPt = endPt;
        }
    }

    static createFromArray(array) {
        array = arrayUtil.dropRight(array, 4);
        return new Line(new Point(array[0], array[1]), new Point(array[2], array[3]));
    }

    setDefault(...args) {
        super.setDefault(...args);
        this._startPt = new Point(0, 0);
        this._endPt = new Point(30, 30);
        this._inheritanceChain.push(GeometryType.LINE);

    }

    get startPt() {
        return this._startPt;
    }
    set startPt(value) {
        if (value.type === typeUtil.VECTOR) value = new Point(value.x, value.y);
        if (value.type === typeUtil.POINT) {
            this._startPt = value;
        }
    }

    get endPt(){
        return this._endPt;
    }
    set endPt(value) {
        if (value.type === typeUtil.VECTOR) value = new Point(value.x, value.y);
        if (value.type === typeUtil.POINT) {
            this._endPt = value;
        }
    }

    getStartPoint() {
        const pt = new Point(this.startPt.x, this.startPt.y);
        pt.rotateMatrix = this.rotateMatrix;
        pt.translateMatrix = this.translateMatrix;
        pt.xform = this.xform;
        return pt;
    }

    getEndPoint() {
        const pt = new Point(this.endPt.x, this.endPt.y);
        pt.rotateMatrix = this.rotateMatrix;
        pt.translateMatrix = this.translateMatrix;
        pt.xform = this.xform;
        return pt;
    }
}