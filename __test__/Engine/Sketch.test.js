/**
 * Created by zzzz on 2017/5/28.
 */
"use strict";

import Sketch from '../../src/Engine/Sketch.js';

HTMLCanvasElement.prototype.getContext = function () {
    return {
        canvas: {
            addEventListener: function () {}
        },
        clearRect: function () {}
    }
};

window.requestAnimationFrame = function () {};

describe('Sketch初始化', () => {
    test('参数为option.id', () => {
        document.body.innerHTML = `<div><canvas id="canvas"></canvas></div>`;
        const sketch = new Sketch({id: 'canvas'});

        const container = document.getElementById('canvas');
        const children = container.children;
        expect(children['bg-layer']).not.toBeUndefined();
        expect(children['main-layer']).not.toBeUndefined();
        expect(children['ui-layer']).not.toBeUndefined();
    });

    test('参数为option.containerId、option.width、option.height', () => {
        document.body.innerHTML = `<div id="container"></div>`;
        const sketch = new Sketch({
            containerId: 'container',
            width: 300,
            height: 200
        });

        const container = document.getElementById('container');
        const children = container.children;
        expect(children['bg-layer']).not.toBeUndefined();
        expect(children['main-layer']).not.toBeUndefined();
        expect(children['ui-layer']).not.toBeUndefined();
    });
});