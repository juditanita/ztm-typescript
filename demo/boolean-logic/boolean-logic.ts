/* eslint-disable */
import { strict as assert } from "assert";

// Boolean logic is a fundamental concept that involves evaluating true/false
// statements. It is a system of logical thought that uses true and false
// values to make deductions or draw conclusions. Boolean logic is used to
// express conditions and make decisions based on the truth or falsehood of
// these conditions.
//


const yes = true;
const age= 18;
const canPurchase = age >=18;
const denyPurchase = age <18;

assert.equal(canPurchase,yes)
assert.equal(denyPurchase,!yes)

const two = 2;
const isThree =(1 + two);
const isNotThree =(1+two) !== 10
assert.equal(isThree,yes);
//will produce error since it not true
assert.equal(isNotThree,yes);
