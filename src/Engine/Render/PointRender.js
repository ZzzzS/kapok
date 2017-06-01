/**
 * Created by zzzz on 2017/5/29.
 */
// @flow
"use strict";
import Point from '../../Geometry/Point';
import Vector from '../../Geometry/Vector';

export default (ctx: Object, point: Point, style: Object): void => {
    const position: Vector = point.positionOfWorld;

    if (style) {
        ctx.strokeStyle = style.strokeColor;
        ctx.fillStyle = style.fillColor;
    } else {
        ctx.strokeStyle = '#000000';
        ctx.fillStyle = '#ffffff';
    }

    ctx.beginPath();

    ctx.arc(position.x, position.y, 5, 0, Math.PI * 2, true);

    ctx.closePath();
    ctx.stroke();
    ctx.fill();
};