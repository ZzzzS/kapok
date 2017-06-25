/**
 * Created by zzzz on 2017/5/28.
 */
// flow
"use strict";
import GeometryType from '../constants/GeometryType';
import typeof GeometryBase from '../Geometry/GeometryBase';

export default {
    isRealNumber(value) {
        return typeof value === 'number' && value.toString() !== 'NaN';
    },
    isArray(value) {
        return Array.isArray(value);
    },
    isPoint(value) {
        return value.geometryType === GeometryType.POINT;
    },
    isLine(value) {
        return value.geometryType === GeometryType.LINE;
    },
    isPolygon(value) {
        return value.geometryType === GeometryType.POLYGON;
    },
    isPlane(value) {
        return value.geometryType === GeometryType.PLANE;
    },
    isGeometryBase(value) {
        return value.geometryType === GeometryType.GEOMETRY_BASE;
    },
    isVector(value) {
        return value.geometryType === GeometryType.VECTOR;
    }

};