"use strict"

let numbers = [1, 2, 3];

numbers = new Proxy(numbers, {
  get(target, prop) {
    if(prop in target) {
      return target[prop];
    } else {
      return "Ты Ебанутый?";
    }
  }
});

console.log(numbers[0]);
console.log(numbers[18]);
console.log(Number.prototype.__proto__);
