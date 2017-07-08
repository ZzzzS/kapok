/**
 * Created by zzzz on 2017/7/6.
 */
document.createElementNS = jest.fn(() => ({
    createSVGMatrix: jest.fn(() => ({
        a: 1,
        b: 0,
        c: 0,
        d: 1,
        e: 0,
        f: 0,
        multiply: jest.fn(() => "multiply"),
        translate: jest.fn(function (x, y) {
            this.e += x;
            this.f += y;
            return this;
        }),
        rotate: jest.fn(() => "rotate"),
        inverse: jest.fn(() => "inverse")
    }))
}));