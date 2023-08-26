"use strict"

function* pseudoRandom(num) {
  let val = num;

  while(true) {
    val = val * 16807 % 2147483647;
    yield val;
  }
}

const generator = pseudoRandom(1);

console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
