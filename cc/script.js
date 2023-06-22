"use strict";


function partial(fn) {
    let args = keysToArray(arguments);
    args.shift();

    function wrapper() {
        let wrapperArgs = keysToArray(arguments);
        return fn.apply(this, args.concat(wrapperArgs));
    }
    return wrapper;
}

function keysToArray(obj) {
    let args = [];
    for(let key in obj)
        args.push(obj[key]);
    return args;
}

function sum(a, b) {
    return a + b;
}

let partSum = partial(sum, 2);

console.log(partSum(3));
