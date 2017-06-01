/**
 * Created by zzzz on 2017/5/30.
 */
import Matrix from '../../src/Math/Matrix';

document.createElementNS = function () {
    return {
        createSVGMatrix: function () {}
    }
};

// global.test();
const matrix = new Matrix();
console.dir(matrix);

global.test('', () => {});