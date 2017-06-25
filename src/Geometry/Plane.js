/**
 * Created by zzzz on 2017/5/30.
 */
import Matrix from '../Math/Matrix';
import typeof Vector from './Vector';
import GeometryType from '../constants/GeometryType';
import typeUtil from '../utils/typeUtil';

export class Xform {
    constructor(matrix) {
        if (matrix && Matrix.isMatrix(matrix)) {
            this._matrix = new Matrix(matrix.dataArray);
        } else if (matrix && typeUtil.isArray(matrix)) {
            this._matrix = new Matrix(matrix);
        } else {
            this._matrix = new Matrix;
        }
    }

    translate(x, y) {
        this._matrix.translate(x, y);
    }

    rotate(angle) {
        this._matrix.rotate(angle);
    }

    get matrix() {
        return this._matrix;
    }
}

export default class Plane extends Xform{
    constructor(matrix) {
        super(matrix);
        this.setDefault();
    }

    setDefault() {
        this._geometryType = GeometryType.PLANE;
    }

    get xAxis(){
        const Vector = require("./Vector").default;
        return new Vector(this._matrix.a, this._matrix.b);
    }
    set xAxis(vect) {
        this._matrix.a = vect.x;
        this._matrix.b = vect.y;
    }

    get yAxis() {
        const Vector = require("./Vector").default;
        return new Vector(this._matrix.c, this._matrix.d);
    }

    set yAxis(vect) {
        this._matrix.c = vect.x;
        this._matrix.d = vect.y;
    }

    get origin() {
        const Point = require("./Point").default;
        return new Point(this._matrix.e, this._matrix.f);
    }
    set origin(val) {
        if (val instanceof Vector) {
            this._matrix.e = val.x;
            this._matrix.f = val.y;
        }
    }

    get geometryType() {
        return this._geometryType;
    }
}