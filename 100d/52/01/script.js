"use strict";

function delay(f, ms) {
  return function (...args) {
    setTimeout(() => f.apply(this, args), ms);
  };
}

function test(x) {
  console.log(x);
}

const delayed = delay(test, 2000);

delayed("x");
