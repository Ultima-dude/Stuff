"use strict";

function bind(fn, context) {
    return function(...args) {
        return fn.call(context, ...args);
    }
}

let obj = {
    x: 2
};

function testThis(a) {
    console.log(`x=${this.x} a=${a}`);
}

let boundTest = bind(testThis, obj);
console.log(boundTest(5));
