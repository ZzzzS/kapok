/**
 * Created by zzzz on 2017/5/29.
 */
/* @flow */

"use strict";
import typeUtil from '../utils/typeUtil';
import arrayUtil from '../utils/arrayUtil';
import Vector from '../Geometry/Vector';

/**
 *
 */
export default class Matrix3 {
    _dataArray: Array<number>;

    /**
     * @constructor
     * @param {number} n11
     * @param {number} n12
     * @param {number} n13
     * @param {number} n21
     * @param {number} n22
     * @param {number} n23
     * @param {number} n31
     * @param {number} n32
     * @param {number} n33
     */
    constructor(...args: Array<number>): void {
        this._dataArray = [1, 0, 0, 0, 1, 0, 0, 0, 1];
        this.dataArray = [].slice.call(arguments);
    }


    /**
     *
     * @param a
     * @param b
     * @returns {Matrix3}
     */
    static multiply(a: Matrix3, b: Matrix3): Matrix3 {
        const result = [];

        const a11 = a.n11, a12 = a.n12, a13 = a.n13;
        const a21 = a.n21, a22 = a.n22, a23 = a.n23;
        const a31 = a.n31, a32 = a.n32, a33 = a.n33;

        const b11 = b.n11, b12 = b.n12, b13 = b.n13;
        const b21 = b.n21, b22 = b.n22, b23 = b.n23;
        const b31 = b.n31, b32 = b.n32, b33 = b.n33;

        result[0] = b11 * a11 + b21 * a12 + b31 * a13;
        result[1] = b12 * a11 + b22 * a12 + b32 * a13;
        result[2] = b13 * a11 + b23 * a12 + b33 * a13;

        result[3] = b11 * a21 + b21 * a22 + b31 * a23;
        result[4] = b12 * a21 + b22 * a22 + b32 * a23;
        result[5] = b13 * a21 + b23 * a22 + b33 * a23;

        result[6] = b11 * a31 + b21 * a32 + b31 * a33;
        result[7] = b12 * a31 + b22 * a32 + b32 * a33;
        result[8] = b13 * a31 + b23 * a32 + b33 * a33;

        return new Matrix3(...result);
    };

    /**
     *
     * ⎡ n1 n2 n3 ⎤
     * ⎢ n4 n5 n6 ⎥ * [x, y, 1]T
     * ⎣ n7 n8 n9 ⎦
     *
     * @param {Matrix3} matrix
     * @param {Geometry.Vector} vector
     * @returns {Matrix3}
     */
    static multiplyVector(matrix: Matrix3, vector: Vector): Vector {
        const x = vector.x * matrix.n11 + vector.y * matrix.n12 + matrix.n13;
        const y = vector.x * matrix.n21 + vector.y * matrix.n22 + matrix.n23;
        return new Vector(x, y);
    };

    multiply(another: Matrix3): void {
        const b11 = another.n11, b12 = another.n12, b13 = another.n13;
        const b21 = another.n21, b22 = another.n22, b23 = another.n32;
        const b31 = another.n31, b32 = another.n32, b33 = another.n33;

        this.n11 = b11 * this.n11 + b21 * this.n12 + b31 * this.n13;
        this.n12 = b12 * this.n11 + b22 * this.n12 + b32 * this.n13;
        this.n13 = b13 * this.n11 + b23 * this.n12 + b33 * this.n13;

        this.n21 = b11 * this.n21 + b21 * this.n22 + b31 * this.n23;
        this.n22 = b12 * this.n21 + b22 * this.n22 + b32 * this.n23;
        this.n23 = b13 * this.n21 + b23 * this.n22 + b33 * this.n23;

        this.n31 = b11 * this.n31 + b21 * this.n32 + b31 * this.n33;
        this.n32 = b12 * this.n31 + b22 * this.n32 + b32 * this.n33;
        this.n33 = b13 * this.n31 + b23 * this.n32 + b33 * this.n33;
    }

    get dataArray (): Array<number> {
        return this._dataArray;
    }

    set dataArray (value: Array<number>): void {
        if (typeUtil.isArray(value) && value.length !== 0) {
            value = arrayUtil.dropRight(value, 9);
            this._dataArray = value;
        }
    }

    get n11(): number {
        return this._dataArray[0];
    }
    set n11(value: number): void {
        if (typeUtil.isRealNumber(value)) {
            this._dataArray[0] = value;
        }
    }

    get n12(): number {
        return this._dataArray[1];
    }
    set n12(value: number): void {
        if (typeUtil.isRealNumber(value)) {
            this._dataArray[1] = value;
        }
    }

    get n13(): number {
        return this._dataArray[2];
    }
    set n13(value: number): void {
        if (typeUtil.isRealNumber(value)) {
            this._dataArray[2] = value;
        }
    }

    get n21(): number {
        return this._dataArray[3];
    }
    set n21(value: number): void {
        if (typeUtil.isRealNumber(value)) {
            this._dataArray[3] = value;
        }
    }

    get n22(): number {
        return this._dataArray[4];
    }
    set n22(value: number): void {
        if (typeUtil.isRealNumber(value)) {
            this._dataArray[4] = value;
        }
    }

    get n23(): number {
        return this._dataArray[5];
    }
    set n23(value: number): void {
        if (typeUtil.isRealNumber(value)) {
            this._dataArray[5] = value;
        }
    }

    get n31(): number {
        return this._dataArray[6];
    }
    set n31(value: number): void {
        if (typeUtil.isRealNumber(value)) {
            this._dataArray[6] = value;
        }
    }

    get n32(): number {
        return this._dataArray[7];
    }
    set n32(value: number): void {
        if (typeUtil.isRealNumber(value)) {
            this._dataArray[7] = value;
        }
    }

    get n33(): number {
        return this._dataArray[8];
    }
    set n33(value: number): void {
        if (typeUtil.isRealNumber(value)) {
            this._dataArray[8] = value;
        }
    }
}
/*
 /**
 * @memberOf Matrix3
 * @param {number} n11
 * @param {number} n12
 * @param {number} n13
 * @param {number} n21
 * @param {number} n22
 * @param {number} n23
 * @param {number} n31
 * @param {number} n32
 * @param {number} n33
 * @returns {Matrix3}
 * /
 var create = function create(n11, n12, n13, n21, n22, n23, n31, n32, n33) {
 var matrix = Object.create(this);
 matrix.data = [].slice.call(arguments);
 return matrix;
 };

 /**
 * @memberOf Matrix3
 * @param {Array} array
 * @returns {Object}
 * /
 var createFromArray = function createFromArray(array) {
 var matrix = Object.create(this);
 matrix.data = array;
 return matrix;
 };

 /**
 * @memberOf Matrix3
 * @param {Matrix3} a
 * @param {Matrix3} b
 * /
 var multiply = function multiply(a, b) {
 var result = [];

 var a11 = a[0], a12 = a[1], a13 = a[2];
 var a21 = a[3], a22 = a[4], a23 = a[5];
 var a31 = a[6], a32 = a[7], a33 = a[8];

 var b11 = b[0], b12 = b[1], b13 = b[2];
 var b21 = b[3], b22 = b[4], b23 = b[5];
 var b31 = b[6], b32 = b[7], b33 = b[8];

 result[0] = b11 * a11 + b21 * a12 + b31 * a13;
 result[1] = b12 * a11 + b22 * a12 + b32 * a13;
 result[2] = b13 * a11 + b23 * a12 + b33 * a13;

 result[3] = b11 * a21 + b21 * a22 + b31 * a23;
 result[4] = b12 * a21 + b22 * a22 + b32 * a23;
 result[5] = b13 * a21 + b23 * a22 + b33 * a23;

 result[6] = b11 * a31 + b21 * a32 + b31 * a33;
 result[7] = b12 * a31 + b22 * a32 + b32 * a33;
 result[8] = b13 * a31 + b23 * a32 + b33 * a33;

 return result;
 };

 /**
 *
 * ⎡ r1 r2 r3 ⎤
 * ⎢ r4 r5 r6 ⎥ * [x, y, 1]T
 * ⎣ r7 r8 r9 ⎦
 *
 * @param {Array} matrix
 * @param {Geometry.Vector} vector
 * @returns {Array}
 * /
 var multiplyVector = function multiplyVector(matrix, vector) {
 return [
 vector.x * matrix[0] + vector.y * matrix[1] + matrix[2],
 vector.x * matrix[3] + vector.y * matrix[4] + matrix[5]
 ];
 };

 /**
 * @namespace Matrix3
 * /
 var Matrix3 = Object.create({}.__proto__, {
 _data: {value: [1, 0, 0, 0, 1, 0, 0, 0, 1], writable: true},
 data: {
 get: function () {
 return this._data;
 },
 set: function (val) {
 if (_.isArray(val)) {
 var len = val.length;
 if (len < 9) {
 val = val.concat([0, 0, 0, 0, 0, 0, 0, 0, 0]);
 val = _.dropRight(val, len);
 } else if (len > 9) {
 val = _.dropRight(val, len - 9);
 }
 this._data = val;
 }
 }
 },
 type: {value: 'Matrix3'},
 create: {value: create},
 createFromArray: {value: createFromArray},
 multiply: {value: multiply},
 multiplyVector: {value: multiplyVector}
 });

 module.exports = Matrix3;
 */