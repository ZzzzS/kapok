/**
 * Created by zzzz on 2017/5/29.
 */
"use strict";

import arrayUtil from '../../src/utils/arrayUtil';

global.describe('arrayUtil.dropRight', () => {
    global.test('只处理array', () => {
        global.expect(() => arrayUtil.dropRight('100000', 2)).toThrow(TypeError);
    });

    global.test('从右截断或填充array', () => {
        global.expect(arrayUtil.dropRight([1, 2, 3, 4, 5, 6, 7], 4)).toEqual([1, 2, 3, 4]);
        global.expect(arrayUtil.dropRight([1, 2, 3, 4], 7)).toEqual([1, 2, 3, 4, 0, 0, 0]);
    });
});
