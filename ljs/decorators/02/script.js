"use strict";

function sum(a, b) {
    console.log(a + b);
}

function delay(func, ms) {
    return function (...args) {
        let savedThis = this;
        setTimeout(function() {
            func.apply(savedThis, args)
        }, ms);
    }
}

let delayedSum = delay(sum, 1000);

delayedSum(3, 4);
