"use strict"

function sumAll(...args) {
  let sum = 0;

  for(let arg of args)
    sum += arg;

  return sum;
}

/*
console.log(sumAll(1));
console.log(sumAll(1, 2));
console.log(sumAll(1, 2, 4));
*/

function showName(firstName, lastName, ...titles) {
  console.log(firstName + ' ' + lastName);
  console.log('*'.repeat(9));
  console.log(titles);
}

console.log(Math.max(3, 5, 1));

let arr = [3, 5, 1];

console.log(Math.max(arr));

console.log(Math.max(...arr));

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

let merged = [0, ...arr1, ...arr2];

console.log(merged);
