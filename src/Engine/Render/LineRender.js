/**
 * Created by zzzz on 2017/6/3.
 */
// @flow
"use strict";
import Point from '../../Geometry/Point';
import Render from './Render';
import Line from '../../Geometry/Line';

export default class LineRender extends Render {
    geometryRender(ctx: Object, geo: Line) {
        const startPt = geo.startPt;
        const endPt = geo.endPt;

        ctx.moveTo(startPt.x, startPt.y);
        ctx.lineTo(endPt.x, endPt.y);
    }
}