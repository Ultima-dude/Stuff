"use strict"

function inBetween(a, b) {
    return function(item) {
        if (item < a || item > b) return false;
        return true;
    }
}

function inArray(arr) {
    return function(item) {
        for (const num of arr) if (num == item) return true;
        return false;
    }
}

const arr = [8, 11, 3, 4, 6, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const range = [4, 5, 6]

console.log(arr.filter(inBetween(3, 6)));
console.log(arr.filter(inArray(range)));
