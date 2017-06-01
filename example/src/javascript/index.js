"use strict";
/* @flow */

import Sketch from '../../../src/index';
import Matrix from '../../../src/Math/Matrix';
import Vector from '../../../src/Geometry/Vector';
import Point from '../../../src/Geometry/Point';
import Plane from '../../../src/Geometry/Plane';
import Polygon from '../../../src/Geometry/Polygon';

const matrix1 = new Matrix();
const matrix2 = new Matrix([1,2,3,4,5,6]);
const matrix3 = new Matrix([2,0,0,5,0,0]);
const vect = new Vector(2, 5);
const pt1 = new Point(20, 50);
const plane = new Plane();
const polygon: Polygon = Polygon.createFromArray(0, 0, 20, 5, 35, 15, 30, 40, 10, 40);
const pts = polygon.getVertexList();

pt1.plane.translate(10, 20);
console.log(pt1.plane);
console.log(pt1);

// vect.applyMatrix(matrix2);
// pt.applyMatrix();
// console.log(pt);

// matrix1.multiply(matrix2);

// matrix3.multiply(matrix2);


// const sketch = new Sketch({
//     containerId: 'sketch',
//     width: 300,
//     height: 200
// });

// sketch.autoLoop();
const sketch = new Sketch({id: 'canvas'});
// sketch.noLoop();
pt1.translate(100, 100);
// polygon.translate(50, 50);
console.log(pt1.plane);
// pt1.rotate(30);
// const translate = new Matrix([1, 0, 1, 0, 1, 0]);
sketch.loop = () => {
    // console.log(sketch.mouseX);
    sketch.clean();
    sketch.draw(new Point(55, 55));
    polygon.plane.translate(1, 0);
    // polygon.translate(0.1, 0);
    polygon.rotate(10, new Point(55, 55));
    sketch.draw(polygon);
    for (let pt of pts) {
        sketch.draw(pt);
    }

    pt1.translate(1, 0);
    pt1.plane.translate(1, 0);
    // pt1.translateWorld(1, 0);
    // pt1.applyMatrix(translate);
    pt1.rotate(1);

    // pt1.applyMatrix2(translate);
    sketch.draw(pt1);
    const pt = new Point(sketch.mouseX, sketch.mouseY);
    sketch.draw(pt);
};
//
// console.log(sketch);


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

const m = new Matrix();
m.translate(10, 10);
const mm = m._svgMatrix.inverse();
console.log(mm);
