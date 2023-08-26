"use strict";

function debounce(f, ms) {
  let isCooldown = false;

  return function (...args) {
    if (!isCooldown) {
      isCooldown = true;
      setTimeout(() => (isCooldown = false), ms);
      return f.apply(this, args);
    } else {
      return;
    }
  };
}

function test(x) {
  return x;
}

const debounced = debounce(test, 2000);

console.log(debounced(7));
console.log(debounced(9));
console.log(debounced(11));
console.log(debounced("something"));

setTimeout(() => console.log(debounced("bingo")), 2100);
