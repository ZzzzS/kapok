/**
 * Created by zzzz on 2017/5/30.
 */
// @flow
import Matrix from '../Math/Matrix';

export class Xform {
    _matrix: Matrix;

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
    constructor() {
        super();
    }
}