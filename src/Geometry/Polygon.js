/**
 * Created by zzzz on 2017/5/31.
 */
// @flow
"use strict";
import GeometryBase from './GeometryBase';
import Point from './Point';
import GeometryType from '../constants/GeometryType';

export default class Polygon extends GeometryBase {
    _vertexList: Array<Point>;

    constructor(...vertexes: Array<Point>) {
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

    static createFromArray(...array: Array<number>): Polygon {
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

    get vertexList(): Array<Point> {
        return this._vertexList;
    }

    getVertexList(): Array<Point> {
        return this._vertexList.map(vertex => {
            vertex.plane = this.plane;
            vertex.xform = this.xform;
            return vertex;
        });
    }
}
