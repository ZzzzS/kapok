"use strict";
require('./drawPoints');
require('./drawLines');

import Sketch from '../../../src/index';
import Matrix from '../../../src/Matrix/Matrix';
import Vector from '../../../src/Geometry/Vector';
import Point from '../../../src/Geometry/Point';
import Plane from '../../../src/Geometry/Plane';
import Polygon from '../../../src/Geometry/Polygon';
import Line from '../../../src/Geometry/Line';


const pt1 = new Point(20, 50);
const polygon: Polygon = Polygon.createFromArray(0, 0, 20, 5, 35, 15, 30, 40, 10, 40);
const pts = polygon.getVertexList();
const sketch = new Sketch({id: 'sketch'});
const vect = new Vector(30, 50);
const line = new Line(new Point(20, 20), new Point(50, 30));
console.log(line);
console.log(new Matrix([1, 0, 0, 1, 50, 100]));

const pl = new Plane(new Matrix([1, 0, 0, 1, 50, 100]));
console.log(pl);

const pt3 = new Point(30, 20, pl);
console.log(pt3);

polygon.translate(50, 30);
console.log(polygon);

pt1.translate(100, 100);
sketch.loop = () => {
    sketch.clean();
    sketch.draw(new Point(55, 55));
    polygon.translate(0.1, 0);
    polygon.translateObject(0.05, 0);
    polygon.rotate(1);
    sketch.draw(polygon);
    for (let pt of pts) {
        sketch.draw(pt);
    }

    pt1.translate(0.1, 0);
    pt1.xform.rotate(1);

    sketch.draw(pt1);
    const pt = new Point(sketch.mouseX, sketch.mouseY);
    sketch.draw(pt);

    sketch.draw(vect, new Point(10, 10));
    sketch.draw(polygon.plane);
    sketch.draw(pl);
    sketch.draw(pt3);
    sketch.draw(line);
};


// function testFunctionTime(fn) {
//     var start = new Date().getTime();
//     if (fn) fn();
//     var end = new Date().getTime();
//     console.log(end-start);
// }

// testFunctionTime(() => {
//     for (let i=0; i<20000; i++) {
//         const div = document.createElement('div');
//         document.body.appendChild(div);
//     }
// });

// const doSomething = new Promise((resolve, reject) => {
//     let i;
//     for (i=0; i<200000; i++) {
//         const div = document.createElement('div');
//         window.document.body.appendChild(div);
//     }
//     resolve(i);
// });

// let start = new Date().getTime();
// console.log(start);
// doSomething.then((data) => {
//     console.log(data);
//     var end = new Date().getTime();
//     console.log(end);
//     console.log(end-start);
//     throw 'XXX';
// }).catch(e => console.log(e));

// const m = new Matrix();
// m.translate(10, 10);
// const mm = m._svgMatrix.inverse();
// console.log(mm);
