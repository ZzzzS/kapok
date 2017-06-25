/**
 * Created by zzzz on 2017/5/30.
 */
// @flow
import Matrix from '../Math/Matrix';
import typeof Vector from './Vector';
import typeof Point from './Point';
import GeometryType from '../constants/GeometryType';

export class Xform {
    _matrix: Matrix;
    _geometryType: string;

    constructor(matrix?: Matrix | Array<number>) {
        if (matrix && matrix instanceof Matrix) {
            this._matrix = new Matrix(matrix.dataArray);
        } else if (matrix && matrix instanceof Array) {
            this._matrix = new Matrix(matrix);
        } else {
            this._matrix = new Matrix;
        }
    }

    translate(x: number, y: number): void {
        this._matrix.translate(x, y);
    }

    rotate(angle: number): void {
        this._matrix.rotate(angle);
    }

    get matrix(): Matrix {
        return this._matrix;
    }
}

export default class Plane extends Xform{
    constructor(matrix?: Matrix | Array<number>) {
        super(matrix);
        this.setDefault();
    }

    setDefault() {
        this._geometryType = GeometryType.PLANE;
    }

    get xAxis(): Vector {
        const Vector = require("./Vector").default;
        return new Vector(this._matrix.a, this._matrix.b);
    }
    set xAxis(vect: Vector) {
        this._matrix.a = vect.x;
        this._matrix.b = vect.y;
    }

    get yAxis(): Vector {
        const Vector = require("./Vector").default;
        return new Vector(this._matrix.c, this._matrix.d);
    }

    set yAxis(vect: Vector) {
        this._matrix.c = vect.x;
        this._matrix.d = vect.y;
    }

    get origin(): Point {
        const Point = require("./Point").default;
        return new Point(this._matrix.e, this._matrix.f);
    }
    set origin(val: Point) {
        if (val instanceof Vector) {
            this._matrix.e = val.x;
            this._matrix.f = val.y;
        }
    }

    get geometryType(): string {
        return this._geometryType;
    }
}