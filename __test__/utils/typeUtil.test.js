/**
 * Created by zzzz on 2017/5/28.
 */
"use strict";
import typeUtil from '../../src/utils/typeUtil';

test('判断是否为 number ，且不为 NaN', () => {
    expect(typeUtil.isRealNumber(100)).toBeTruthy();
    expect(typeUtil.isRealNumber(100.01)).toBeTruthy();
    expect(typeUtil.isRealNumber({})).not.toBeTruthy();
    expect(typeUtil.isRealNumber([])).not.toBeTruthy();
    expect(typeUtil.isRealNumber(NaN)).not.toBeTruthy();
    expect(typeUtil.isRealNumber(true)).not.toBeTruthy();
    expect(typeUtil.isRealNumber('100')).not.toBeTruthy();
});

test('判断是否为Array', () => {
    expect(typeUtil.isArray('aaa')).toBeFalsy();
    expect(typeUtil.isArray({})).toBeFalsy();
    expect(typeUtil.isArray(100)).toBeFalsy();
    expect(typeUtil.isArray(true)).toBeFalsy();
    expect(typeUtil.isArray(null)).toBeFalsy();
    expect(typeUtil.isArray(undefined)).toBeFalsy();
    expect(typeUtil.isArray([])).toBeTruthy();
    expect(typeUtil.isArray([100, '100', {}])).toBeTruthy();
});
