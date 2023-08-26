"use strict"

const user = {
    name: "John",
    age: 30
}

const {name, age: years, isAdmin = 'false'} = user;

console.log(name);
console.log(years);
console.log(isAdmin);
