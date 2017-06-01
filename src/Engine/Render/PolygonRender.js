/**
 * Created by zzzz on 2017/5/31.
 */
// @flow
"use strict";
import Polygon from '../../Geometry/Polygon';
// import Matrix from '../../Math/Matrix';
// console.log(Matrix);

export default (ctx: Object, polygon: Polygon, style: Object): void => {
    const Matrix = require('../../../src/Math/Matrix').default;
    const pts = polygon.vertexList;

    if (style) {
        ctx.strokeStyle = style.strokeColor;
        ctx.fillStyle = style.fillColor;
    } else {
        ctx.strokeStyle = '#000000';
        ctx.fillStyle = '#ffffff';
    }

    const m: Matrix = Matrix.multiply(polygon.plane, polygon.xform);

    ctx.save();
    // console.log(m);
    ctx.transform(...m.dataArray);
    ctx.beginPath();

    pts.forEach(function (pt, index) {
        if (index === 0) {
            ctx.moveTo(pt.x, pt.y);
        } else {
            ctx.lineTo(pt.x, pt.y);
        }
    });

    ctx.closePath();
    ctx.restore();
    ctx.stroke();
    ctx.fill();
};