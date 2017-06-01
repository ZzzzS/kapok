/**
 * Created by zzzz on 2017/5/28.
 */
// flow
"use strict";

export default {
    isRealNumber(value: any): boolean {
        return typeof value === 'number' && value.toString() !== 'NaN';
    },
    isArray(value: any): boolean {
        return Array.isArray(value);
    }
};