/**
 * Created by zzzz on 2017/5/31.
 */
// @flow
"use strict";
import GeometryBase from '../../Geometry/GeometryBase';
import Polygon from '../../Geometry/Polygon';
import Render from './Render';

export default class PolygonRender extends Render{
    geometryRender(ctx: Object, geo: Polygon) {
        super.geometryRender(ctx, geo);
        const pts = geo.vertexList;

        pts.forEach(function (pt, index) {
            if (index === 0) {
                ctx.moveTo(pt.x, pt.y);
            } else {
                ctx.lineTo(pt.x, pt.y);
            }
        });
    }
}