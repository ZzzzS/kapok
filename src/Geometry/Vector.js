/**
 * Created by zzzz on 2017/5/28.
 */
// @flow
"use strict";
import GeometryBase from './GeometryBase';
import GeometryType from '../constants/GeometryType';
import typeUtil from '../utils/typeUtil';
import Matrix from '../Math/Matrix';

export default class Vector extends GeometryBase{
    _x: number;
    _y: number;

    constructor(x: number, y: number) {
        super();
        if (typeUtil.isRealNumber(x) && typeUtil.isRealNumber(y)) {
            this.x = x;
            this.y = y;
        }
    }

    setDefault(): void {
        super.setDefault();
        this._x = 0;
        this._y = 0;
        this._geometryType = GeometryType.VECTOR;
    };

    subtract(vect: Vector): Vector {
        return new Vector(vect.x - this.x, vect.y - this.y);
    }

    static subtract(vectA: Vector, vectB: Vector): Vector {
        return new Vector(vectB.x - vectA.x, vectB.y - vectA.y);
    }

    add(vect: Vector): Vector {
        return new Vector(vect.x + this.x, vect.y + this.y);
    }

    static add(vectA: Vector, vectB: Vector): Vector {
        return new Vector(vectB.x + vectA.x, vectB.y + vectA.y);
    }
    
    get x(): number {
        return this._x;
    }
    set x(value: number) {
        if (typeUtil.isRealNumber(value)) {
            this._x = value;
        }
    }
    get y(): number {
        return this._y;
    }
    set y(value: number) {
        if (typeUtil.isRealNumber(value)) {
            this._y = value;
        }
    }

    get positionOfWorld(): Vector {
        const m = Matrix.multiply(this.plane, this.xform);
        return Matrix.multiplyVector(m, this);
    }

    get norm(): number {
        return global.Math.sqrt(global.Math.pow(this.x, 2) + global.Math.pow(this.y, 2));
    }

    get angle(): number {
        if (this.x === 0 && this.y === 0) return 0;
        return this.y > 0 ? global.Math.acos(this.x / this.norm) : -global.Math.acos(this.x / this.norm);
    }

    toString(): string {
        return `${this.geometryType}<${this.x}, ${this.y}>`
    }


};
