/**
 * Created by zzzz on 2017/5/28.
 */
"use strict";
import GeometryType from '../constants/GeometryType';
import Plane, { Xform } from './Plane';
import Matrix from '../Math/Matrix';
import typeof Point from './Point';

export default class GeometryBase {
    constructor () {
        this.setDefault();
    }

    setDefault() {
        this._xform = new Xform;
        this._translateMatrix = new Matrix;
        this._rotateMatrix = new Matrix;
        this._geometryType = GeometryType.GEOMETRY_BASE;
    }

    applyMatrix(plane): void {
        this.xform.matrix.multiply(plane);
    }

    translate(x, y): void {
        this._translateMatrix.translate(x, y)
    }

    translateObject(x, y): void {
        this.xform.translate(x, y);
    }

    rotate(angle, origin): void {
        if (origin) {
            const inverseMatrix = Matrix.inverse(this.plane.matrix);
            const vect = Matrix.multiplyVector(inverseMatrix, origin);
            this._rotateMatrix.translate(vect.x, vect.y);
            this._rotateMatrix.rotate(angle);
            this._rotateMatrix.translate(-vect.x, -vect.y);

        } else {
            this._rotateMatrix.rotate(angle);
        }
    }

    get geometryType() {
        return this._geometryType;
    }

    get plane() {
        const m = Matrix.multiply(this._translateMatrix, this._rotateMatrix);
        return new Plane(m);
    }

    get translateMatrix() {
        return this._translateMatrix;
    }
    set translateMatrix(value) {
        if (value instanceof Matrix) {
            this._translateMatrix = value;
        }
    }

    get rotateMatrix() {
        return this._rotateMatrix;
    }
    set rotateMatrix(value) {
        if (value instanceof Matrix) {
            this._rotateMatrix = value;
        }
    }

    get xform() {
        return this._xform;
    }
    set xform(value) {
        if (value instanceof Xform) {
            this._xform = value;
        }
    }

    toString() {
        return `${this.geometryType}<>`
    }

};