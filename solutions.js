"use strict";

/**
 * Write your solutions here.
 *
 * **Note**: While normally it is good practice to wrap your javascript in an
 * immediately invoked function expression (iife), you should _not_ do that
 * here. If you do, the automated tests will not be able to see your functions.
 * If you don't know what an iffe is, don't worry about it :)
 *
 * This file is for defining the following functions. See README.md for more detail.
 * isTrue
 * isFalse
 * not
 * addOne
 * isEven
 * isIdentical
 * isEqual
 * or
 * and
 * concat
 */

function isTrue(value) {
    return value === true;
}

function isFalse(value) {
    return value === false;
}

function not(value) {
    return !value;
}

function addOne(value) {
    return value++;
}
/*  addOne(0)                    // 1
 addOne(2)                    // 3
 addOne(-5)                   // -4
 addOne(5.789)                // 6.789
 addOne(Infinity)             // Infinity
 addOne("2")                  // 3
 addOne("0")                  // 1
 addOne("banana")             // NaN
 addOne(true)                 // NaN
 addOne(NaN)                  // NaN

 HAVING ISSUES*/
function isEven(value) {
    return value % 2 === 0;
}

function isIdentical(value) {
    return value === value;

}

function or(value) {
    return value || value;
}

function isEqual(value) {
    return value == value;
} // having issues

function and(value) {
    return value && value;
}

function concat(value) {
    return value + value;
}
/*

 */