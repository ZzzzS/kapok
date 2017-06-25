/**
 * Created by zzzz on 2017/5/30.
 */
"use strict";
import GeometryType from '../constants/GeometryType';
import { Xform } from '../Geometry/Plane';

// type SVGMatrix = {
//     a: number,
//     b: number,
//     c: number,
//     d: number,
//     e: number,
//     f: number,
//     multiply: Function,
//     translate: Function,
//     rotate: Function,
//     inverse: Function
// };

export default class Matrix {
    constructor(args) {
        const svgElement = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        this._svgMatrix = svgElement.createSVGMatrix();

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

    static inverse(m) {
        const svgMatrix = m._svgMatrix.inverse();
        return new Matrix([svgMatrix.a, svgMatrix.b, svgMatrix.c, svgMatrix.d, svgMatrix.e, svgMatrix.f]);
    }

    multiply(another) {
        this._svgMatrix = this._svgMatrix.multiply(another._svgMatrix);
    }

    translate(x, y) {
        this._svgMatrix = this._svgMatrix.translate(x, y);
    }

    rotate(angle) {
        this._svgMatrix = this._svgMatrix.rotate(angle);
    }

    static multiply(a, b) {
        const xformA: SVGMatrix = a instanceof Xform ? a.matrix.svgMatrix : a.svgMatrix;
        const xformB: SVGMatrix = b instanceof Xform ? b.matrix.svgMatrix : b.svgMatrix;
        const svgMatrix = xformA.multiply(xformB);
        return new Matrix([svgMatrix.a, svgMatrix.b, svgMatrix.c, svgMatrix.d, svgMatrix.e, svgMatrix.f]);
    }

    static multiplyVector(xform, vector) {
        const Point = require("../Geometry/Point").default;
        const Vector = require("../Geometry/Vector").default;
        let matrix: Matrix = xform instanceof Xform ? xform.matrix : xform;
        const x = vector.x * matrix.a + vector.y * matrix.c + matrix.e;
        const y = vector.x * matrix.b + vector.y * matrix.d + matrix.f;
        if (vector.geometryType === GeometryType.VECTOR) {
            return new Vector(x, y);
        } else {
            return new Point(x, y);
        }
    }


    get a() {
        return this._svgMatrix.a;
    }
    set a(value) {
        this._svgMatrix.a = value;
    }

    get b() {
        return this._svgMatrix.b;
    }
    set b(value) {
        this._svgMatrix.b = value;
    }

    get c() {
        return this._svgMatrix.c;
    }
    set c(value) {
        this._svgMatrix.c = value;
    }

    get d() {
        return this._svgMatrix.d;
    }
    set d(value) {
        this._svgMatrix.d = value;
    }

    get e() {
        return this._svgMatrix.e;
    }
    set e(value) {
        this._svgMatrix.e = value;
    }

    get f() {
        return this._svgMatrix.f;
    }
    set f(value) {
        this._svgMatrix.f = value;
    }

    get svgMatrix() {
        return this._svgMatrix;
    }

    get dataArray() {
        return [this.a, this.b, this.c, this.d, this.e, this.f];
    }
}


