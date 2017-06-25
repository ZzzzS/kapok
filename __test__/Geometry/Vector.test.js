/**
 * Created by zzzz on 2017/5/28.
 */
"use strict";
import Vector from '../../src/Geometry/Vector';
import GeometryType from '../../src/constants/GeometryType';

document.createElementNS = () => {
    return {
        createSVGMatrix: () => {}
    }
};

test('Vector的默认值为{x: 0, y: 0}', () => {
    const vect = new Vector();
    expect(vect.x).toBe(0);
    expect(vect.y).toBe(0);
});

test('当new Vector带参数时，必须同时提供两个非0的number参数, 否则返回默认对象', () => {
    let vect;

    vect = new Vector(100);
    expect(vect.x).toBe(0);
    expect(vect.y).toBe(0);

    vect = new Vector('100');
    expect(vect.x).toBe(0);
    expect(vect.y).toBe(0);

    vect = new Vector('100', 100);
    expect(vect.x).toBe(0);
    expect(vect.y).toBe(0);

    vect = new Vector(50, 100);
    expect(vect.x).toBe(50);
    expect(vect.y).toBe(100);
});

test(`GeometryType === ${GeometryType.VECTOR}`, () => {
    const vect = new Vector();
    expect(vect.geometryType).toBe(GeometryType.VECTOR);
});