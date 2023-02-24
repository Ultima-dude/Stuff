"use strict"

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
}

function topSalary(obj) {
  let max = {salary: 0, name: null};
  for(let [name, salary] of Object.entries(obj))
    if (max.salary < salary) {
      max.salary = salary;
      max.name = name;
    }
  return max.name;
}

console.log(topSalary(salaries));
console.log(topSalary({}));
