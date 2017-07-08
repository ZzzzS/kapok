/**
 * Created by zzzz on 2017/6/3.
 */
"use strict";

import Matrix from '../../Matrix/Matrix';
import Style from '../../Style/Style';
import typeUtil from '../../utils/typeUtil';

const setStyle = function (ctx, style) {
    if (style) {
        ctx.strokeStyle = style.strokeColor;
        ctx.fillStyle = style.fillColor;
    } else {
        const style = new Style;
        ctx.strokeStyle = style.strokeColor;
        ctx.fillStyle = style.fillColor;
    }
};

const beforeRender = function (ctx, plane) {
    ctx.save();
    if (plane) {
        if (typeUtil.isPlane(plane)) {
            ctx.transform(...plane.matrix.dataArray);
        } else if (typeUtil.isVector(plane)) {
            ctx.translate(plane.x, plane.y);
        }
    }
    ctx.beginPath();
};

const afterRender = function (ctx) {
    ctx.closePath();
    ctx.restore();
    ctx.stroke();
    ctx.fill();
};

export default class Render {
    render(ctx, config, geo, plane, style) {
        this.config = config;

        setStyle(ctx, style);
        beforeRender(ctx, plane);
        this.geometryRender(ctx, geo);
        afterRender(ctx);
    }



    geometryRender(ctx, geo) {
        const m: Matrix = Matrix.multiply(geo.plane.matrix, geo.xform.matrix);
        ctx.transform(...m.dataArray);
    }
}