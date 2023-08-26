"use strict"

function topSalary(salaries) {
    let max = 0;
    let nameMax = null;

    for(const [name, salary] of Object.entries(salaries)){
        if (max < salary) {
            max = salary;
            nameMax = name;
        }
    }

    return nameMax;
}

const salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
}

console.log(topSalary(salaries));
console.log(topSalary({}));
