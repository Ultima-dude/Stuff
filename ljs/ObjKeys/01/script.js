"use strict"

function sumSalaries(obj) {
  return Object.values(obj).reduce((acc, item) => acc + item, 0);
}

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
}

console.log(sumSalaries(salaries));
