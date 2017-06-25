/**
 * Created by zzzz on 2017/5/29.
 */
"use strict";
import Vector from './Vector';
import GeometryType from '../constants/GeometryType';

export default class Point extends Vector{
    setDefault() {
        super.setDefault();
        this._geometryType = GeometryType.POINT;
    };
};
