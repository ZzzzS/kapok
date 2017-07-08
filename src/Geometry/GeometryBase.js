/**
 * Created by zzzz on 2017/5/28.
 */
"use strict";
import GeometryType from '../constants/GeometryType';
import Plane, { Xform } from './Plane';
import Matrix from '../Matrix/Matrix';
import typeUtil from '../utils/typeUtil';

export default class GeometryBase {
    constructor (plane) {
        this._inheritanceChain = [];
        this.setDefault(plane);
    }

    setDefault(plane) {
        this._xform = new Xform;
        this._translateMatrix = new Matrix;
        this._rotateMatrix = new Matrix;
        plane && (this.plane = plane);
        this._inheritanceChain.push(GeometryType.GEOMETRY_BASE);
    }

    applyMatrix(plane) {
        this._xform.multiply(plane);
    }

    translate(x, y) {
        this._translateMatrix.translate(x, y)
    }

    translateObject(x, y) {
        this._xform.translate(x, y);
    }

    rotate(angle, origin) {
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
        return this._inheritanceChain[this._inheritanceChain.length - 1];
    }

    get plane() {
        const m = Matrix.multiply(this._translateMatrix, this._rotateMatrix);
        return new Plane(m);
    }
    set plane(value) {
        if (typeUtil.isPlane(value)) {
            const matrix = value.matrix;
            const translateMatrix = new Matrix([1, 0, 0, 1, matrix.e, matrix.f]);
            const rotateMatrix = new Matrix([matrix.a, matrix.b, matrix.c, matrix.d, 0, 0]);
            this._translateMatrix = translateMatrix;
            this._rotateMatrix = rotateMatrix;
        }
    }

    get translateMatrix() {
        return this._translateMatrix;
    }
    set translateMatrix(value) {
        if (typeUtil.isMatrix(value)) {
            this._translateMatrix = value;
        }
    }

    get rotateMatrix() {
        return this._rotateMatrix;
    }
    set rotateMatrix(value) {
        if (typeUtil.isMatrix(value)) {
            this._rotateMatrix = value;
        }
    }

    get xform() {
        return this._xform;
    }
    set xform(value) {
        if (typeUtil.isXform(value)) {
            this._xform = value;
        }
    }

    toString() {
        return `${this.geometryType}<>`
    }

};