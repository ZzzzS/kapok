/**
 * Created by zzzz on 2017/6/3.
 */
// @flow
"use strict";
import GeometryBase from '../../Geometry/GeometryBase';
import Matrix from '../../Math/Matrix';
import Plane from '../../Geometry/Plane';
import Vector from '../../Geometry/Vector';
import typeof Config from '../Config';
import Style from '../../Style/Style';

export default class Render {
    config: Config;

    render(ctx: Object, config:Config, geo: any | Plane, plane?: Plane | Vector, style?: Object): void {
        this.config = config;

        if (style) {
            ctx.strokeStyle = style.strokeColor;
            ctx.fillStyle = style.fillColor;
        } else {
            const style = new Style;
            ctx.strokeStyle = style.strokeColor;
            ctx.fillStyle = style.fillColor;
        }

        ctx.save();
        if (plane) {
            if (plane instanceof Plane) {
                ctx.transform(...plane.matrix.dataArray);
            } else if (plane instanceof Vector) {
                ctx.translate(plane.x, plane.y);
            }
        }
        ctx.beginPath();

        this.geometryRender(ctx, geo);

        ctx.closePath();
        ctx.restore();
        ctx.stroke();
        ctx.fill();
    }

    geometryRender(ctx: Object, geo: any) {
        const m: Matrix = Matrix.multiply(geo.plane.matrix, geo.xform.matrix);
        ctx.transform(...m.dataArray);
    }
}