/**
 * Created by zzzz on 2017/5/29.
 */
/* @flow */
"use strict";
import PointRender from './PointRender';
import PolygonRender from './PolygonRender';
import GeometryType from '../../constants/GeometryType';

const RenderMapping: {
    [renderName: GeometryType]: {
        type: string,
        render: Function
    }
} = {
    [`${GeometryType.POINT}`]: {
        type: GeometryType.POINT,
        render: PointRender
    },
    [`${GeometryType.POLYGON}`]: {
        type: GeometryType.POLYGON,
        render: PolygonRender
    }
};

export default RenderMapping;
