/**
 * Created by zzzz on 2017/6/3.
 */
"use strict";

import Render from './Render';

export default class LineRender extends Render {
    geometryRender(ctx, geo) {
        const startPt = geo.startPt;
        const endPt = geo.endPt;

        ctx.moveTo(startPt.x, startPt.y);
        ctx.lineTo(endPt.x, endPt.y);
    }
}