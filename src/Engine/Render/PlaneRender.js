/**
 * Created by zzzz on 2017/6/3.
 */
// @flow
"use strict";

import Render from './Render';
import VectorRender from './VectorRender';
import PointRender from './PointRender';
import Style from '../../Style/Style';

const vectorRender = new VectorRender;
const pointRender = new PointRender;

export default class PlaneRender extends Render {
    geometryRender(ctx: Object, geo: Plane) {
        const size = this.config.planeVectorSize;
        const xAxis = geo.xAxis;
        const yAxis = geo.yAxis;
        const origin = geo.origin;
        let style;

        xAxis.x *= size;
        xAxis.y *= size;
        yAxis.x *= size;
        yAxis.y *= size;

        style = new Style('#CC3300');
        vectorRender.render(ctx, this.config, xAxis, origin, style);
        style = new Style('#00CC00');
        vectorRender.render(ctx, this.config, yAxis, origin, style);
        style = new Style;
        pointRender.render(ctx, this.config, origin, null, style);
    }
}