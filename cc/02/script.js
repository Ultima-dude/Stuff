"use strict"

function sequence(start = 0, step = 1) {
    return function() {
        start += step;
        return start - step;
    }
}

function take(gen, x) {
    let resultList = [];
    for(let i = 0; i < x; i++)
        resultList.push(gen());
    return resultList;
}

let gen = sequence(4, 2);

console.log(take(gen, 4));
