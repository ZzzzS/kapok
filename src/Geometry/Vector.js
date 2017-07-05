/**
 * Created by zzzz on 2017/5/28.
 */
"use strict";
import GeometryBase from './GeometryBase';
import GeometryType from '../constants/GeometryType';
import typeUtil from '../utils/typeUtil';
import Matrix from '../Math/Matrix';

export default class Vector extends GeometryBase{
    constructor(x, y, plane) {
        super(plane);
        if (typeUtil.isRealNumber(x) && typeUtil.isRealNumber(y)) {
            this.x = x;
            this.y = y;
        }
    }

    setDefault(...args){
        super.setDefault(...args);
        this._x = 0;
        this._y = 0;
        this._geometryType = GeometryType.VECTOR;
    };

    subtract(vect){
        return new Vector(vect.x - this.x, vect.y - this.y);
    }

    static subtract(vectA, vectB) {
        return new Vector(vectB.x - vectA.x, vectB.y - vectA.y);
    }

    add(vect) {
        return new Vector(vect.x + this.x, vect.y + this.y);
    }

    static add(vectA, vectB) {
        return new Vector(vectB.x + vectA.x, vectB.y + vectA.y);
    }
    
    get x() {
        return this._x;
    }
    set x(value) {
        if (typeUtil.isRealNumber(value)) {
            this._x = value;
        }
    }
    get y() {
        return this._y;
    }
    set y(value) {
        if (typeUtil.isRealNumber(value)) {
            this._y = value;
        }
    }

    get positionOfWorld() {
        const m = Matrix.multiply(this.plane.matrix, this.xform.matrix);
        return Vector.multiplyMatrix(this, m);
    }

    get norm() {
        return global.Math.sqrt(global.Math.pow(this.x, 2) + global.Math.pow(this.y, 2));
    }

    get angle() {
        if (this.x === 0 && this.y === 0) return 0;
        return this.y > 0 ? global.Math.acos(this.x / this.norm) : -global.Math.acos(this.x / this.norm);
    }

    toString() {
        return `${this.geometryType}<${this.x}, ${this.y}>`
    }

    static multiplyMatrix(vector, matrix) {
        const x = vector.x * matrix.a + vector.y * matrix.c + matrix.e;
        const y = vector.x * matrix.b + vector.y * matrix.d + matrix.f;
        return new Vector(x, y);
    }

};
