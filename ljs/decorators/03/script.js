"use strict";

function sum(a, b) {
    console.log(a + b);
}

function debounce(func, ms) {
    let isCooldown = true;

    return function () {
        if (isCooldown) {
            func.apply(this, arguments);
        }
        isCooldown = false;
        setTimeout(() => isCooldown = true, ms);
    };
}

let printSum = debounce(sum, 1500);

printSum(1, 3);
printSum(1, 2);
printSum(1, 5);
printSum(1, 4);
