/**
 * Created by zzzz on 2017/6/3.
 */
"use strict";
import GeometryBase from './GeometryBase';
import Point from './Point';
import GeometryType from '../constants/GeometryType';
import Vector from './Vector';

export default class Line extends GeometryBase {
    constructor(startPt, endPt) {
        super();
        if (startPt) {
            this.startPt = startPt;
        }
        if (endPt) {
            this.endPt = endPt;
        }
    }

    setDefault() {
        this._startPt = new Point(0, 0);
        this._endPt = new Point(30, 30);
        this._geometryType = GeometryType.LINE;
    }

    get startPt() {
        return this._startPt;
    }
    set startPt(value) {
        if (value instanceof Point || value instanceof Vector) {
            this._startPt = value;
        }
    }

    get endPt(){
        return this._endPt;
    }
    set endPt(value) {
        console.log(value.geometryType === GeometryType.POINT);
        if (value instanceof Point || value instanceof Vector) {
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