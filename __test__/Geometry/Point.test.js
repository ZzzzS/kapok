/**
 * Created by zzzz on 2017/5/29.
 */
"use strict";

require("SVGMatrix");
import Point from '../../src/Geometry/Point';

let point;

beforeEach(() => {
    point = new Point();
});

test('Point的默认值为{x: 0, y: 0}', () => {
    expect(point.x).toBe(0);
    expect(point.y).toBe(0);
});

test('当new Vector带参数时，必须同时提供两个非0的number参数, 否则返回默认对象', () => {
    let point;

    point = new Point(100);
    expect(point.x).toBe(0);
    expect(point.y).toBe(0);

    point = new Point('100');
    expect(point.x).toBe(0);
    expect(point.y).toBe(0);

    point = new Point('100', 100);
    expect(point.x).toBe(0);
    expect(point.y).toBe(0);

    point = new Point(50, 100);
    expect(point.x).toBe(50);
    expect(point.y).toBe(100);
});

test("point.geometryType", () => {
    expect(point.geometryType.toLowerCase()).toContain("point");
});

test("point.copy", () => {
    const newPoint = point.copy();
    expect(newPoint.geometryType.toLowerCase()).toContain("point");
    expect(newPoint.x).toBe(point.x);
    expect(newPoint.y).toBe(point.x);
    expect(newPoint.plane.dataArray).toEqual(point.plane.dataArray);
    expect(newPoint.plane == point.plane).toBeFalsy();
    expect(newPoint == point).toBeFalsy();
});