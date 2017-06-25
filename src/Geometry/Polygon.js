/**
 * Created by zzzz on 2017/5/31.
 */
"use strict";
import GeometryBase from './GeometryBase';
import Point from './Point';
import GeometryType from '../constants/GeometryType';

export default class Polygon extends GeometryBase {
    constructor() {
        super();

        if (arguments.length < 4) {
            throw(new TypeError('Polygon should have at least 4 vertexList.'));
        } else {
            this._vertexList = [].slice.call(arguments);
        }
    }

    setDefault() {
        super.setDefault();
        this._geometryType = GeometryType.POLYGON;
    }

    static createFromArray() {
        let numArray: Array<number> = [].slice.call(arguments);
        let pointArray: Array<Point> = [];
        if (arguments.length < 8) {
            throw(new TypeError('Polygon.createFromArray should have at least 8 params.'));
        } else {
            if (numArray.length % 2 === 1) {
                numArray.push(0);
            }

            for (let i = 0; i < numArray.length; i += 2) {
                pointArray.push(new Point(numArray[i], numArray[i + 1]));
            }

            return new Polygon(...pointArray);
        }
    }

    get vertexList() {
        return this._vertexList;
    }

    getVertexList() {
        return this._vertexList.map(vertex => {
            vertex.rotateMatrix = this.rotateMatrix;
            vertex.translateMatrix = this.translateMatrix;
            vertex.xform = this.xform;
            return vertex;
        });
    }
}
