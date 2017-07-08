/**
 * Created by zzzz on 2017/5/26.
 */
"use strict";
// require('ctx-polyfill');
import RenderMapping from './Render/RenderMapping';
import Config from './Config';

/**
 * 用于在document中选择一个canvas作为画布
 * @typedef {Object} OptionsHasId
 * @typedef {string} OptionsHasId.id
 */

/**
 * 用于创建一个被包含于container中的canvas作为画布。
 * @typedef {Object} OptionsHasNoId
 * @typedef {string} OptionsHasNoId.containerId
 * @typedef {number} OptionsHasNoId.width
 * @typedef {number} OptionsHasNoId.height
 */

const addMouseMoveListerner = (element, cb) => {
    element.addEventListener('mousemove', cb);
};

export default class Sketch {
    /**
     * 初始化画布。
     * @memberOf Sketch
     * @param {(OptionsHasId|OptionsHasNoId)} options
     * @private
     */
    constructor(options) {
        let container,
            canvas_bg = null,
            canvas_main = null,
            canvas_ui = null,
            width,
            height,
            fragment;

        this._renderMapping = RenderMapping;
        this._config = new Config;

        const createCanvasLayers = () => {
            fragment = document.createDocumentFragment();

            canvas_bg = document.createElement('canvas');
            canvas_bg.style.position = 'absolute';
            canvas_bg.style.zIndex = '1';
            canvas_bg.width = width;
            canvas_bg.height = height;
            canvas_bg.id = 'bg-layer';

            canvas_main = document.createElement('canvas');
            canvas_main.style.position = 'absolute';
            canvas_main.style.zIndex = '1';
            canvas_main.width = width;
            canvas_main.height = height;
            canvas_main.id = 'main-layer';

            canvas_ui = document.createElement('canvas');
            canvas_ui.style.position = 'absolute';
            canvas_ui.style.zIndex = '2';
            canvas_ui.width = width;
            canvas_ui.height = height;
            canvas_ui.id = 'ui-layer';

            fragment.appendChild(canvas_bg);
            fragment.appendChild(canvas_main);
            fragment.appendChild(canvas_ui);
            container.appendChild(fragment);
        };

        if (!this._mainCtx) {

            const id = options.id;
            if (options.id) {

                const canvas = document.getElementById(id);

                width = options.width || canvas.style.width || 300;
                height = options.height || canvas.style.height || 200;

                container = document.createElement('div');
                container.style.position = 'relative';
                container.style.width = width + 'px';
                container.style.height = height + 'px';
                container.id = id;

                canvas.parentNode.insertBefore(container, canvas);
                canvas.remove();

                createCanvasLayers();
            } else {
                const containerId = options.containerId;
                container = document.getElementById(containerId);
                container.style.position = 'relative';

                width = options.width || container.style.width; //|| this.config.canvasDefaultSize.width;
                height = options.height || container.style.height; //|| this.config.canvasDefaultSize.height;

                createCanvasLayers();
            }

            this._id = Math.random();

            /*::` flow ignore */
            this._bgCtx = canvas_bg.getContext('2d');
            this._mainCtx = canvas_main.getContext('2d');
            this._uiCtx = canvas_ui.getContext('2d');
            /*:: flow ignore `;*/


            this._autoLoop = true;
            // this._sketchObjs = [];
            this._frameCount = 0;

            addMouseMoveListerner(this._uiCtx.canvas, this._handleMouseMove);
            this._run();
        }
    }

    _handleMouseMove = (event): void => {
        this._mouseX = event.offsetX;
        this._mouseY = event.offsetY;
    };

    _run = () => {
        this.clean(this._bgCtx);

        if (this._autoLoop ||  this._frameCount <= 0) {
            this.loop();
        }

        // this._sketchObjs.forEach(function (item, index) {
        //     this._draw(this._bgCtx, item.geometry, item.style);
        // }.bind(this));

        this._frameCount++;
        this._requestNextFrame(this._run);
    };

    _requestNextFrame = (func): void => {
        this._animationId = window.requestAnimationFrame(func);
    };

    _loop = () => {
        this.clean();
    };

    autoLoop = () => {
        this._autoLoop = true;
    };

    noLoop = () => {
        this._autoLoop = false;
    };

    clean = (ctx): void => {
        if (ctx === undefined) ctx = this._mainCtx;
        ctx.clearRect(0, 0, this.width, this.height);
    };

    _draw(ctx, config, geo, plane, style) {
        for (const type in this._renderMapping) {
            if (geo.geometryType === type) {
                this._renderMapping[type].render(ctx, config, geo, plane, style);
            }
        }
    };

    draw = (geo, plane, style): void => {
        this._draw(this._mainCtx, this.config, geo, plane, style);
    };

    get mouseX() {
        return this._mouseX || -1000;
    }

    get mouseY() {
        return this._mouseY || -1000;
    }

    get frameCount() {
        return this._frameCount;
    }

    get width() {
        return (this._bgCtx && this._bgCtx.canvas.width) || 0;
    }

    get height() {
        return (this._bgCtx && this._bgCtx.canvas.height) || 0;
    }

    get loop() {
        return this._loop;
    }
    set loop(value) {
        if (typeof value === 'function') {
            this._loop = value;
        }
    }

    get config() {
        return this._config;
    }

}

