/**
 * Created by zzzz on 2017/5/28.
 */
"use strict";

require("SVGMatrix");
import typeUtil from '../../src/utils/typeUtil';
import Vector from '../../src/Geometry/Vector';
import Point from '../../src/Geometry/Point';
import GeometryBase from '../../src/Geometry/GeometryBase';
import Plane, { Xform } from '../../src/Geometry/Plane';
import Line from '../../src/Geometry/Line';
import Polygon from '../../src/Geometry/Polygon';
import Matrix from '../../src/Matrix/Matrix';

let vect, point, geometryBase, plane, xform, line, polygon, matrix;

beforeEach(() => {
    vect = new Vector;
    point = new Point;
    geometryBase = new GeometryBase;
    plane = new Plane;
    xform = new Xform;
    line = new Line;
    polygon = new Polygon;
    matrix = new Matrix;
});

test('判断是否为 number ，且不为 NaN', () => {
    expect(typeUtil.isRealNumber(100)).toBeTruthy();
    expect(typeUtil.isRealNumber(100.01)).toBeTruthy();
    expect(typeUtil.isRealNumber({})).not.toBeTruthy();
    expect(typeUtil.isRealNumber([])).not.toBeTruthy();
    expect(typeUtil.isRealNumber(NaN)).not.toBeTruthy();
    expect(typeUtil.isRealNumber(true)).not.toBeTruthy();
    expect(typeUtil.isRealNumber('100')).not.toBeTruthy();
});

test('判断是否为Array', () => {
    expect(typeUtil.isArray('aaa')).toBeFalsy();
    expect(typeUtil.isArray({})).toBeFalsy();
    expect(typeUtil.isArray(100)).toBeFalsy();
    expect(typeUtil.isArray(true)).toBeFalsy();
    expect(typeUtil.isArray(null)).toBeFalsy();
    expect(typeUtil.isArray(undefined)).toBeFalsy();
    expect(typeUtil.isArray([])).toBeTruthy();
    expect(typeUtil.isArray([100, '100', {}])).toBeTruthy();
});


test("isVector", () => {
    expect(typeUtil.isVector(vect)).toBeTruthy();
    expect(typeUtil.isVector(point)).toBeTruthy();
    expect(typeUtil.isVector(line)).toBeFalsy();
});

test("isPoint", () => {
    expect(typeUtil.isPoint(vect)).toBeFalsy();
    expect(typeUtil.isPoint(point)).toBeTruthy();
    expect(typeUtil.isPoint(geometryBase)).toBeFalsy();
});

test("isGeometryBase", () => {
    expect(typeUtil.isGeometryBase(vect)).toBeTruthy();
    expect(typeUtil.isGeometryBase(point)).toBeTruthy();
    expect(typeUtil.isGeometryBase(line)).toBeTruthy();
    expect(typeUtil.isGeometryBase(polygon)).toBeTruthy();
    expect(typeUtil.isGeometryBase(geometryBase)).toBeTruthy();
    expect(typeUtil.isGeometryBase(plane)).toBeFalsy();
});

test("isLine", () => {
    expect(typeUtil.isLine(vect)).toBeFalsy();
    expect(typeUtil.isLine(point)).toBeFalsy();
    expect(typeUtil.isLine(geometryBase)).toBeFalsy();
    expect(typeUtil.isLine(line)).toBeTruthy();
});

test("isPolygon", () => {
    expect(typeUtil.isPolygon(vect)).toBeFalsy();
    expect(typeUtil.isPolygon(point)).toBeFalsy();
    expect(typeUtil.isPolygon(geometryBase)).toBeFalsy();
    expect(typeUtil.isPolygon(polygon)).toBeTruthy();
});

test("isXform", () => {
    expect(typeUtil.isXform(geometryBase)).toBeFalsy();
    expect(typeUtil.isXform(xform)).toBeTruthy();
    expect(typeUtil.isXform(plane)).toBeTruthy();
});

test("isPlane", () => {
    expect(typeUtil.isPlane(geometryBase)).toBeFalsy();
    expect(typeUtil.isPlane(xform)).toBeFalsy();
    expect(typeUtil.isPlane(plane)).toBeTruthy();
});

test("isMatrix", () => {
    expect(typeUtil.isMatrix(matrix)).toBeTruthy();
    expect(typeUtil.isMatrix(point)).toBeFalsy();
});