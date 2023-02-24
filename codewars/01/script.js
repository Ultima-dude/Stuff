"use strict"

function invert(arr) {
  arr.forEach((item, index, array) => {
    array[index] = item ? item * -1 : item;
  });

  return arr;
}

let test1 = [1, 2, 3, 4];
let test2 = [-1, 2, -3, 4];
let test3 = [];
let test4 = [0];

//console.log(invert(test1));
//console.log(invert(test2));
//console.log(invert(test3));
//console.log(invert(test4));

function countPositivesSumNegatives(input) {
  return input.reduce((acc, item) => item > 0 ? [++acc[0], acc[1]] : [acc[0], acc[1] + item], [0, 0]);
}

//console.log(countPositivesSumNegatives([1,2,3,4,-1,-2]));

function findShort(s) {
  return s.split(' ').sort((a, b) => a.length - b.length)[0].length;
}

console.log(findShort("Here comes a new challenger!"));
