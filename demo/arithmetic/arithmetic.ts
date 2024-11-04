/* eslint-disable */
import { strict as assert } from "assert";

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
//
const add = 1 +1;
assert.equal(add, 2);

const inf = 2/0;
assert.equal(inf, Infinity);

const nan = 0/0;
//check if it a number or not
assert(isNaN(nan));