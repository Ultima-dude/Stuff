"use strict"

const values = ["Hare", "Krishna", "Hare", "Krishna", "Krishna", "Krishna", "Hare", "Hare", ":-O"];

function unique(arr) {
    const unique = new Set(arr);
    return Array.from(unique);
}

console.log(unique(values));
