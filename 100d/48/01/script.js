"use strict"

const salaries = {
    "John": 100,
    "Pete": 300,
    "Hary": 250
};

const test = {};

console.log(sumSalaties(salaries));
console.log(sumSalaties(test));

function sumSalaties(obj) {
    return Object.values(obj).reduce((acc, item) => acc += item, 0);
}
