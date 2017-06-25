/**
 * Created by zzzz on 2017/5/28.
 */
// @flow
"use strict";
import GeometryType from '../constants/GeometryType';
import Plane, { Xform } from './Plane';
import Matrix from '../Math/Matrix';
import typeof Point from './Point';

export default class GeometryBase {
    _geometryType: GeometryType;
    _xform: Xform;
    _translateMatrix: Matrix;
    _rotateMatrix: Matrix;
    constructor (plane: ?Plane, xform: ?Xform) {
        this.setDefault();

    }

    setDefault() {
        this._xform = new Xform;
        this._translateMatrix = new Matrix;
        this._rotateMatrix = new Matrix;
        this._geometryType = GeometryType.GEOMETRY_BASE;
    }

    applyMatrix(plane: Matrix): void {
        this.xform.matrix.multiply(plane);
    }

    translate(x: number, y: number): void {
        this._translateMatrix.translate(x, y)
    }

    translateObject(x: number, y: number): void {
        this.xform.translate(x, y);
    }

    rotate(angle: number, origin?: Point): void {
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

    get geometryType(): GeometryType {
        return this._geometryType;
    }

    get plane(): Plane {
        const m = Matrix.multiply(this._translateMatrix, this._rotateMatrix);
        return new Plane(m);
    }

    get translateMatrix(): Matrix {
        return this._translateMatrix;
    }
    set translateMatrix(value: Matrix) {
        if (value instanceof Matrix) {
            this._translateMatrix = value;
        }
    }

    get rotateMatrix(): Matrix {
        return this._rotateMatrix;
    }
    set rotateMatrix(value: Matrix) {
        if (value instanceof Matrix) {
            this._rotateMatrix = value;
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

    toString(): string {
        return `${this.geometryType}<>`
    }

};