import Sketch from 'Sketch';

const sketch = new Sketch({
    containerId: 'sketch',
    width: 300,
    height: 200
});

// sketch.autoLoop();

sketch.loop = () => {
    // console.log(sketch.mouseX);
};

console.log(sketch);