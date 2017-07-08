/**
 * Created by zzzz on 2017/6/3.
 */
"use strict";

import Render from './Render';

export default class VectorRender extends Render {
    geometryRender(ctx, geo) {
        const norm = geo.norm;
        const size = this.config.vectorArrowSize;

        ctx.rotate(geo.angle);

        ctx.moveTo(0, 0);
        ctx.lineTo(norm, 0);
        ctx.moveTo(norm - size, -size);
        ctx.lineTo(norm, 0);
        ctx.moveTo(norm - size, size);
        ctx.lineTo(norm, 0);
    }
}