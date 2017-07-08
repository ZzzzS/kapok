/**
 * Created by zzzz on 2017/7/5.
 */
import Sketch from '../../../src/index';
import Line from '../../../src/Geometry/Line';

const sketch = new Sketch({id: 'canvas-02'});
sketch.noLoop();

sketch.draw(Line.createFromArray([10, 10, 50, 50]));
sketch.draw(Line.createFromArray([100, 50, 50, 150]));
