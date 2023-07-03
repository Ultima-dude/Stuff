"use strict"

const foo = {
    a: {
        foo: "test",
        bar: "tets",
    },

    b: {
        bar: "ttes",
    },

    c(foo) {
        console.log(foo);
    }
};

foo.itself = foo;

function copyObj(obj) {
    const buf = new Object();

    for(let key in obj) {
        buf[key] = obj[key];
    }

    return buf;
}

function isEmpty(obj) {
    for(let key in obj) return false;

    return true;
}

const bar = copyObj(foo);
//const baz = structuredClone(foo);

console.log(bar);
//console.log(baz);
console.log(foo == bar);
//console.log(foo == baz);
