"use strict"

function filterRange(arr, a, b) {
    let result = new Array();
    arr.forEach((item, index) => {
        if(item >= a && item <= b)
            result.push(item);
    });

    return result;
}

let testArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(filterRange(testArr, 3, 7));