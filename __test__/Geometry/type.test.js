/**
 * Created by zzzz on 2017/6/4.
 */
"use strict";

require("SVGMatrix");
import GeometryType from '../../src/constants/GeometryType';
import GeometryBase from '../../src/Geometry/GeometryBase';
import Vector from '../../src/Geometry/Vector';
import Point from '../../src/Geometry/Point';
import Line from '../../src/Geometry/Line';

test('test GeometryBase', () => {
    expect(new GeometryBase().geometryType === GeometryType.GEOMETRY_BASE).toBeTruthy();
});
test('test Vector', () => {
    expect(new Vector().geometryType === GeometryType.VECTOR).toBeTruthy();
});
test('test Point', () => {
    expect(new Point().geometryType === GeometryType.POINT).toBeTruthy();
});
test('test Line', () => {
    expect(new Line().geometryType === GeometryType.LINE).toBeTruthy();
});
