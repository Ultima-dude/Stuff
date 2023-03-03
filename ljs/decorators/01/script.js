"use strict";

function sum(a, b) {
    globalThis.console.log(a + b);
    return a + b;
}

function spy(func) {
    function wrapper(...args) {
        let result = func.call(this, ...args);
        wrapper.calls.push(args);
        return result;
    }

    wrapper.calls = [];

    return wrapper;
}

let count = spy(sum);

count(2, 4);
count(2, 4);
count(2, 4);
count(2, 4);
count(2, 4);

console.log(count.calls);
