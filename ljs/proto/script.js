"use strict";

function f () {
    console.log('Hello!');
}

function defer(time) {
    return setTimeout(this, time);
}

function decorDefer(time) {
    let f = this;

    return function(...args) {
        setTimeout(() => f.apply(this, args), time);
    }
}

f.__proto__.defer = defer;
f.__proto__.decorDefer = decorDefer;

f.defer(1000);
f.decorDefer(2000)();

let dictionary = Object.create(null);

function toString() {
    return Object.keys(this).join(',');
}

Object.defineProperty(dictionary, "toString", {
    value: toString,
    writable: true,
    configurable: true
});
dictionary.apple = "Apple";
dictionary.__proto__ = "test";

for (let key in dictionary) {
    console.log(key);
}

alert(dictionary);
