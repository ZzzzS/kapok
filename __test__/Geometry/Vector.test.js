/**
 * Created by zzzz on 2017/5/28.
 */
"use strict";

require("SVGMatrix");
import Vector from '../../src/Geometry/Vector';

let vect;

beforeEach(() => {
    vect = new Vector();
});

test('Vector的默认值为{x: 0, y: 0}', () => {
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

test("vect.geometryType", () => {
    expect(vect.geometryType.toLowerCase()).toContain("vector");
});

test("vect.copy", () => {
    const newVect = vect.copy();
    expect(newVect.geometryType.toLowerCase()).toContain("vector");
    expect(newVect.x).toBe(vect.x);
    expect(newVect.y).toBe(vect.x);
    expect(newVect.plane.dataArray).toEqual(vect.plane.dataArray);
    expect(newVect.plane == vect.plane).toBeFalsy();
    expect(newVect == vect).toBeFalsy();
});