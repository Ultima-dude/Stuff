"use strict"

function makeTestObj() {
    return {
        name: "John",
        ref: this
    }
}

const foo = makeTestObj();

console.log(foo.ref);
console.log(foo.ref.name);
