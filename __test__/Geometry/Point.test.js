/**
 * Created by zzzz on 2017/5/29.
 */
"use strict";
import Point from '../../src/Geometry/Point';
import GeometryType from '../../src/constants/GeometryType';

document.createElementNS = () => {
    return {
        createSVGMatrix: () => {}
    }
};

test('Point的默认值为{x: 0, y: 0}', () => {
    const point = new Point();
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

test(`GeometryType === ${GeometryType.POINT}`, () => {
    const point = new Point();
    expect(point.geometryType).toBe(GeometryType.POINT);
});