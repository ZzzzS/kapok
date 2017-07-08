/**
 * Created by zzzz on 2017/5/28.
 */
// flow
"use strict";
import GeometryType from '../constants/GeometryType';
import Type from '../constants/Type';

export default {
    isRealNumber(value) {
        return typeof value === 'number' && value.toString() !== 'NaN';
    },
    isArray(value) {
        return Array.isArray(value);
    },
    isPoint(value) {
        return value._inheritanceChain.indexOf(GeometryType.POINT) !== -1;
    },
    isLine(value) {
        return value._inheritanceChain.indexOf(GeometryType.LINE) !== -1;
    },
    isPolygon(value) {
        return value._inheritanceChain.indexOf(GeometryType.POLYGON) !== -1;
    },
    isPlane(value) {
        return value._inheritanceChain.indexOf(GeometryType.PLANE) !== -1;
    },
    isXform(value) {
        return value._inheritanceChain.indexOf(GeometryType.XFORM) !== -1;
    },
    isGeometryBase(value) {
        return value._inheritanceChain.indexOf(GeometryType.GEOMETRY_BASE) !== -1;
    },
    isVector(value) {
        return value._inheritanceChain.indexOf(GeometryType.VECTOR) !== -1;
    },
    isMatrix(value) {
        return value.type === Type.MATRIX;
    }
};