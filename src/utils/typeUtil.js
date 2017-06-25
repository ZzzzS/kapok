/**
 * Created by zzzz on 2017/5/28.
 */
// flow
"use strict";
import GeometryType from '../constants/GeometryType';
import typeof GeometryBase from '../Geometry/GeometryBase';

export default {
    isRealNumber(value: any): boolean {
        return typeof value === 'number' && value.toString() !== 'NaN';
    },
    isArray(value: any): boolean {
        return Array.isArray(value);
    },
    isPoint(value: GeometryBase): boolean {
        return value.geometryType === GeometryType.POINT;
    },
    isLine(value: GeometryBase): boolean {
        return value.geometryType === GeometryType.LINE;
    },
    isPolygon(value: GeometryBase): boolean {
        return value.geometryType === GeometryType.POLYGON;
    },
    isPlane(value: GeometryBase): boolean {
        return value.geometryType === GeometryType.PLANE;
    },
    isGeometryBase(value: GeometryBase): boolean {
        return value.geometryType === GeometryType.GEOMETRY_BASE;
    },
    isVector(value: GeometryBase): boolean {
        return value.geometryType === GeometryType.VECTOR;
    }

};