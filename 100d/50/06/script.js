"use strict"

function sum(num) {
    return function(secondNum) {
        console.log(secondNum + num);
    }
}


sum(4)(6);
sum()();
