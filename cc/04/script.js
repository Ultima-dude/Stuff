"use strict"

function gen(a = 0, b = 1) {
    return function () {
        a += b;
        return a - b;
    }
}

function fmap(a, gen) {
    return function () {
        return a(gen.apply(this, arguments));
    }
}

let generator = gen(1, 1);
let res = fmap(a => a * 2, generator);

console.log(res());
console.log(res());
console.log(res());

function add(a, b) {
    return a + b;
}

let doubleAdd = fmap(a => a * 2, add);

console.log(doubleAdd(2,3));
console.log(doubleAdd(4,7));
