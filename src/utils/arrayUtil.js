/**
 * Created by zzzz on 2017/5/29.
 */
// @flow

"use strict";
import typeUtil from './typeUtil';

const arrayUtil = {
    dropRight(array: Array<number>, length: number): Array<number> {
        if (!typeUtil.isArray(array)) {
            throw new TypeError();
        }

        const newArray = [].concat(array);
        const arrayLen = newArray.length;

        if (length < arrayLen) {
            newArray.splice(length, arrayLen);
        } else if (length > arrayLen) {
            for (let i = 0; i < length - arrayLen; i++) {
                newArray.push(0);
            }
        }

        return newArray;
    }
};

export default arrayUtil;
