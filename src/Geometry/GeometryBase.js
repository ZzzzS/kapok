/**
 * Created by zzzz on 2017/5/28.
 */
// @flow
"use strict";
import GeometryType from '../constants/GeometryType';
import Plane, { Xform } from './Plane';
import Matrix from '../Math/Matrix';

export default class GeometryBase {
    _geometryType: GeometryType;
    _plane: Plane;
    _xform: Xform;
    // _translatePlaneWorld: Matrix;

    /**
     * @constructor
     */
    constructor () {
        this.setDefault();
    }

    setDefault() {
        this._plane = new Plane;
        this._xform = new Xform;
        this._geometryType = GeometryType.GEOMETRY_BASE;
    }

    applyMatrix(plane: Matrix): void {
        this.xform.multiply(plane);
    }

    // applyMatrix2(plane: Matrix): void {
    //     this.xform.multiply2(plane);
    // }

    translate(x: number, y: number): void {
        this.xform.translate(x, y);
    }

    // translateWorld(x: number, y: number): void {
    //     this.translatePlaneWorld.translate(x, y);
    // }

    rotate(angle: number, origin?: Point): void {
        if (origin) {
            // const inverseMatrix = Matrix.inverse(this.xform.matrix);
            // const vect = inverseMatrix.multiplyVector(origin);
            this.xform.translate(origin.x, origin.y);
            this.xform.rotate(angle);
            this.xform.translate(-origin.x, -origin.y);

        } else {
            this.xform.rotate(angle);
        }
    }

    get geometryType(): GeometryType {
        return this._geometryType;
    }

    get plane(): Xform {
        return this._plane;
    }
    set plane(value: Xform) {
        if (value instanceof Xform) {
            this._plane = value;
        }
    }

    get xform(): Xform {
        return this._xform;
    }
    set xform(value: Xform) {
        if (value instanceof Xform) {
            this._xform = value;
        }
    }

    // get translatePlaneWorld(): Matrix {
    //     return this._translatePlaneWorld;
    // }

    toString(): string {
        return `${this.geometryType}<>`
    }

};