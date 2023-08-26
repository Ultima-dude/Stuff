"use strict"

const user = {
    name: "John",
    age: 30
};

console.log(count(user));

function count(obj) {
    return Object.keys(obj).length;
}
