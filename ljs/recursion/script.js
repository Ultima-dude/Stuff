"use strict"

function pow(x, n) {
  if (n == 1) {
    return x;
  } else {
    return x * pow(x, n - 1);
  }
}

//console.log(pow(2, 4));
/*
function printTriangle(x) {
  if (!x)
    return;
  printLine(x);
  return printTriangle(x - 1);
}

function printLine(x) {
  console.log('*'.repeat(x));
}

printTriangle(8);
*/

let company = {
  sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 600}],
  development: {
    sites: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800}],
    internals: [{name: 'Jack', salary: 1300}]
  }
};

function sumSalaries(department) {
  if (Array.isArray(department)) {
    return department.reduce((prev, current) => prev + current.salary, 0);
  } else {
    var sum = 0;
    for(let subdep of Object.values(department))
      sum += sumSalaries(subdep);
  }
    return sum;
}

console.log(sumSalaries(company));
