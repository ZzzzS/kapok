/**
 * Created by zzzz on 2017/5/29.
 */
// @flow
"use strict";

import Point from '../../Geometry/Point';
import Vector from '../../Geometry/Vector';
import Render from './Render';

export default class PointRender extends Render {
    geometryRender(ctx: Object, geo: Vector) {
        const position: Vector = geo.positionOfWorld;
        const size = this.config.pointSize;
        ctx.arc(position.x, position.y, size, 0, Math.PI * 2, true);
    }
}
