/**
 * Created by zzzz on 2017/5/31.
 */
"use strict";

import Render from './Render';

export default class PolygonRender extends Render{
    geometryRender(ctx, geo) {
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