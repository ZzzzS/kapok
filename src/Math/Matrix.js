/**
 * Created by zzzz on 2017/5/30.
 */
// @flow
"use strict";
import Vector from '../Geometry/Vector';
import Point from '../Geometry/Point';
import GeometryType from '../constants/GeometryType';
import { Xform } from '../Geometry/Plane';

type SVGMatrix = {
    a: number,
    b: number,
    c: number,
    d: number,
    e: number,
    f: number,
    multiply: Function,
    translate: Function,
    rotate: Function
};

export default class Matrix {
    _svgMatrix: SVGMatrix;
    constructor(args: ?Array<number>) {
        /*::` flow ignore */
        const svgElement = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        this._svgMatrix = svgElement.createSVGMatrix();
        /*:: flow ignore `;*/

        if (args) {
            this._svgMatrix.a = args[0];
            this._svgMatrix.b = args[1];
            this._svgMatrix.c = args[2];
            this._svgMatrix.d = args[3];
            this._svgMatrix.e = args[4];
            this._svgMatrix.f = args[5];
        }
    }

    inverse() {
        this._svgMatrix = this._svgMatrix.inverse();
    }

    static inverse(m: Matrix) {
        const svgMatrix = m._svgMatrix.inverse();
        return new Matrix([svgMatrix.a, svgMatrix.b, svgMatrix.c, svgMatrix.d, svgMatrix.e, svgMatrix.f]);
    }

    multiply(another: Matrix): void {
        this._svgMatrix = this._svgMatrix.multiply(another._svgMatrix);
    }

    translate(x: number, y: number): void {
        this._svgMatrix = this._svgMatrix.translate(x, y);
    }

    rotate(angle: number): void {
        this._svgMatrix = this._svgMatrix.rotate(angle);
    }

    static multiply(a: Matrix | Xform, b: Matrix | Xform): Matrix {
        const xformA: SVGMatrix = a instanceof Xform ? a.matrix.svgMatrix : a.svgMatrix;
        const xformB: SVGMatrix = b instanceof Xform ? b.matrix.svgMatrix : b.svgMatrix;
        const svgMatrix = xformA.multiply(xformB);
        return new Matrix([svgMatrix.a, svgMatrix.b, svgMatrix.c, svgMatrix.d, svgMatrix.e, svgMatrix.f]);
    }

    static multiplyVector(xform: Matrix | Xform, vector: Vector): Vector {
        let matrix: Matrix = xform instanceof Xform ? xform.matrix : xform;
        const x = vector.x * matrix.a + vector.y * matrix.c + matrix.e;
        const y = vector.x * matrix.b + vector.y * matrix.d + matrix.f;
        if (vector.geometryType === GeometryType.VECTOR) {
            return new Vector(x, y);
        } else {
            return new Point(x, y);
        }
    }


    get a(): number {
        return this._svgMatrix.a;
    }
    set a(value: number) {
        this._svgMatrix.a = value;
    }

    get b(): number {
        return this._svgMatrix.b;
    }
    set b(value: number) {
        this._svgMatrix.b = value;
    }

    get c(): number {
        return this._svgMatrix.c;
    }
    set c(value: number) {
        this._svgMatrix.c = value;
    }

    get d(): number {
        return this._svgMatrix.d;
    }
    set d(value: number) {
        this._svgMatrix.d = value;
    }

    get e(): number {
        return this._svgMatrix.e;
    }
    set e(value: number) {
        this._svgMatrix.e = value;
    }

    get f(): number {
        return this._svgMatrix.f;
    }
    set f(value: number) {
        this._svgMatrix.f = value;
    }

    get svgMatrix(): SVGMatrix {
        return this._svgMatrix;
    }

    get dataArray(): Array<number> {
        return [this.a, this.b, this.c, this.d, this.e, this.f];
    }
}


