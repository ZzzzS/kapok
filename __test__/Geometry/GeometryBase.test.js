/**
 * Created by zzzz on 08/07/2017.
 */
jest.mock("../../src/Matrix/Matrix");
import Matrix from "../../src/Matrix/Matrix";
import GeometryBase from '../../src/Geometry/GeometryBase';

describe("new GeometryBase", () => {
    const g = new GeometryBase();

    test("geometryBase.xform.matrix is instanceOf Matrix", () => {
        expect(Matrix.mock.instances[0] === g.xform.matrix).toBeTruthy();
    });

    test("geometryBase.translateMatrix is instanceOf Matrix", () => {
        expect(Matrix.mock.instances[1] === g.translateMatrix).toBeTruthy();
    });

    test("geometryBase.rotateMatrix is instanceOf Matrix", () => {
        expect(Matrix.mock.instances[2] === g.rotateMatrix).toBeTruthy();
    });
});

test("geometryBase.geometryType", () => {
    const g = new GeometryBase();
    expect(g.geometryType.toLowerCase()).toContain("geometrybase");
});

describe("geometryBase.applyMatrix", () => {
    const g = new GeometryBase();
    const fn_multiply = g.xform.matrix.multiply;
    g.applyMatrix("sth");

    test("geometryBase.xform.matrix.multiply called", () => {
        expect(fn_multiply.mock.calls.length).toBe(1);
    });

    test("parameters are the same", () => {
        expect(fn_multiply.mock.calls[0][0]).toBe("sth");
    });
});

describe("geometryBase.translate", () => {
    const g = new GeometryBase();
    const fn_translate = g.translateMatrix.translate;
    g.translate("args[1]", "args[2]");

    test("geometryBase.translateMatrix.translate called", () => {
        expect(fn_translate.mock.calls.length).toBe(1);
    });

    test("parameters are the same", () => {
        expect(fn_translate.mock.calls[0][0]).toBe("args[1]");
        expect(fn_translate.mock.calls[0][1]).toBe("args[2]");
    });
});

describe("geometryBase.translateObject", () => {
    const g = new GeometryBase();
    const fn_translate = g.xform.matrix.translate;
    g.translateObject("arg");

    test("geometryBase.xform.matrix.translate called", () => {
        expect(fn_translate.mock.calls.length).toBe(1);
    });

    test("parameters are the same", () => {
        expect(fn_translate.mock.calls[0][0]).toBe("arg");
    });
});

describe("geometryBase.rotate", () => {
    const g = new GeometryBase();
    const fn_rotate = g.rotateMatrix.rotate;
    g.rotate();

    test("geometryBase.rotateMatrix.rotate called", () => {
        expect(fn_rotate.mock.calls.length).toBe(1);
    });
});

test("getter", () => {
    const g = new GeometryBase();

    expect(g._xform == g.xform).toBeTruthy();
    expect(g._translateMatrix == g.translateMatrix).toBeTruthy();
    expect(g._rotateMatrix == g.rotateMatrix).toBeTruthy();
    expect(g._rotateMatrix == g.translateMatrix).toBeFalsy();
});

