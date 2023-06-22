"use strict"

function map(fn, array) {
    let list = [];
    for(let i = 0; i < arr.length; i++)
        list.push(fn(array[i]));
    return list;
}

let arr = [1, 2, 3, 4, 5];

console.log(map(num => num *= 2, arr));
console.log(arr);
