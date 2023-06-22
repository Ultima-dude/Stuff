"use strict";

function partialAny(fn) {
    let args = [];
    for(let key in arguments)
        if(+key)
            args.push(arguments[key]);

    return function() {
        let wrapperArgs = [];
        for(let key in arguments)
            wrapperArgs.push(arguments[key]);
        return fn.apply(this, replaceEmptyValues(args, wrapperArgs));
    }
}

function replaceEmptyValues(arr1, arr2) {
    let arr = [];
    arr = arr.concat(arr1);
    let j = 0;
    for(let i = 0; i < arr.length; i++) {
        if(typeof(arr[i]) == 'undefined') {
            arr[i] = arr2[j];
            j++;
        }
    }

    while(j < arr2.length) {
        arr.push(arr2[j]);
        j++
    }

    return arr;
}

function add(a, b) {
    return a + b;
}

let add1 = partialAny(add, undefined, 3);


console.log(add1(2));
