/**
 * Created by zzzz on 2017/5/29.
 */
"use strict";
import Matrix3 from '../../src/Math/Matrix3.old.js';
import Vector from '../../src/Geometry/Vector';

const matrix_1 = new Matrix3();
const matrix_2 = new Matrix3(1, 2, 3, 4);
const matrix_3 = new Matrix3(1, 2, 3, 4, 5, 6, 7, 8, 9);
const vect = new Vector(2, 5);

test('Matrix constructor', () => {
    expect(matrix_1.dataArray).toEqual([1, 0, 0, 0, 1, 0, 0, 0, 1]);
    expect(matrix_2.dataArray).toEqual([1, 2, 3, 4, 0, 0, 0, 0, 0]);
    expect(matrix_3.dataArray).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
});

test('Matrix multiply', () => {
    expect(Matrix3.multiply(matrix_1, matrix_3)).toEqual(matrix_3);
    expect(Matrix3.multiply(matrix_3, matrix_3).dataArray).toEqual([30, 36, 42, 66, 81, 96, 102, 126, 150]);
});

test('Matrix multiplyVector', () => {
    expect(Matrix3.multiplyVector(matrix_3, vect).toString()).toBe('Vector<15, 39>');
});

