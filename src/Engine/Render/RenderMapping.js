/**
 * Created by zzzz on 2017/5/29.
 */
/* @flow */
"use strict";
import PointRender from './PointRender';
import PolygonRender from './PolygonRender';
import VectorRender from './VectorRender';
import GeometryType from '../../constants/GeometryType';
import PlaneRender from './PlaneRender';
import LineRender from './LineRender';

const polygonRender = new PolygonRender;
const pointRender = new PointRender;
const vectorRender = new VectorRender;
const planeRender = new PlaneRender;
const lineRender = new LineRender;

const RenderMapping: {
    [renderName: GeometryType]: {
        type: string,
        render: Function
    }
} = {
    [`${GeometryType.POINT}`]: {
        type: GeometryType.POINT,
        render: pointRender.render.bind(pointRender)
    },
    [`${GeometryType.POLYGON}`]: {
        type: GeometryType.POLYGON,
        render: polygonRender.render.bind(polygonRender)
    },
    [`${GeometryType.VECTOR}`]: {
        type: GeometryType.VECTOR,
        render: vectorRender.render.bind(vectorRender)
    },
    [`${GeometryType.PLANE}`]: {
        type: GeometryType.PLANE,
        render: planeRender.render.bind(planeRender)
    },
    [`${GeometryType.LINE}`]: {
        type: GeometryType.LINE,
        render: lineRender.render.bind(lineRender)
    }
};

export default RenderMapping;
