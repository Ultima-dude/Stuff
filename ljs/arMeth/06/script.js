"use strict"

function Calculator() {
  this.methods = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
  };

  this.calculate = function(str) {
    let split = str.split(" ");
    let a = +split[0];
    let op = split[1];
    let b = +split [2];

    if (!this.methods[op] || isNaN(a) || isNaN(b))
      return NaN;

    return this.methods[op](a, b);
  }

  this.addMethod = function(name, func) {
    this.methods[name] = func;
  }
}

let test = new Calculator;

console.log(test.calculate("2 + 3"));
console.log(test.calculate("2 - 3"));

test.addMethod("*", (a, b) => a * b);
console.log(test.calculate("2 * 3"));
