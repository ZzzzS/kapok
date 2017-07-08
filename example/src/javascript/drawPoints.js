/**
 * Created by zzzz on 2017/7/5.
 */
import Sketch from '../../../src/index';
import Point from '../../../src/Geometry/Point';

const sketch = new Sketch({id: 'canvas-01'});
sketch.noLoop();

const pts = [];
for (let i = 10; i > 0; i--) {
    for (let j = 10; j > 0; j--) {
        pts.push(new Point(i * 15, j * 15));
    }
}

pts.forEach(pt => {
    sketch.draw(pt);
});