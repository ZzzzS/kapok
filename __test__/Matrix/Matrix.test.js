/**
 * Created by zzzz on 2017/5/30.
 */
import Matrix from '../../src/Matrix/Matrix';
require("SVGMatrix");

let matrix, fn_inverse, fn_translate, fn_multiply, fn_rotate;

beforeEach(() => {
    matrix = new Matrix;
    fn_inverse = matrix.svgMatrix.inverse;
    fn_translate = matrix.svgMatrix.translate;
    fn_multiply = matrix.svgMatrix.multiply;
    fn_rotate = matrix.svgMatrix.rotate;
});

test("new Matrix", () => {
    const array = [1, 2, 3, 4, 5, 6];
    const matrix = new Matrix(array);
    expect(matrix.a).toBe(array[0]);
    expect(matrix.b).toBe(array[1]);
    expect(matrix.c).toBe(array[2]);
    expect(matrix.d).toBe(array[3]);
    expect(matrix.e).toBe(array[4]);
    expect(matrix.f).toBe(array[5]);
    expect(matrix.dataArray).toEqual(array);
});


test('matrix.inverse', () => {
    matrix.inverse();
    expect(fn_inverse.mock.calls.length).toBe(1);
    expect(matrix.svgMatrix).toBe("inverse");
});

test('matrix.type', () => {
    expect(matrix.type.toLowerCase()).toContain("matrix");
});

test("matrix.translate", () => {
    matrix.translate(10, 20);
    matrix.translate(10, 10);
    expect(fn_translate.mock.calls.length).toBe(2);
    expect(matrix.dataArray).toEqual([1, 0, 0, 1, 20, 30]);
});

test("matrix.copy", () => {
    const matrix = new Matrix([1, 2, 3, 4, 5, 6]);
    const newMatrix = matrix.copy();
    expect(matrix.dataArray).toEqual(newMatrix.dataArray);
    expect(matrix == newMatrix).toBeFalsy();
});

test("matrix.multiply", () => {
    const newMatrix = new Matrix([1, 2, 3, 4, 5, 6]);
    matrix.multiply(newMatrix);
    expect(fn_multiply.mock.calls.length).toBe(1);
    expect(fn_multiply.mock.calls[0][0]).toEqual(newMatrix.svgMatrix);
    expect(matrix.svgMatrix).toBe("multiply");
});

test("matrix.rotate", () => {
    matrix.rotate(10);
    expect(fn_rotate.mock.calls.length).toBe(1);
    expect(fn_rotate.mock.calls[0][0]).toBe(10);
    expect(matrix.svgMatrix).toBe("rotate");
});
