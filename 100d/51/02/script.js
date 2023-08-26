"use strict";

function makeCounter() {
  let counter = 0;

  const fn = function count() {
    return counter++;
  };

  fn.set = function (value) {
    counter = value;
  };

  fn.decrease = function () {
    return counter--;
  };

  return fn;
}

const test = makeCounter();

console.log(test());
console.log(test());
console.log(test());
console.log(test.set(7));
console.log(test.decrease());
console.log(test.decrease());
console.log(test.decrease());
console.log(test.decrease());

function makeKounter() {
  const fn = function count() {
    return count.counter++;
  };

  fn.counter = 0;

  fn.set = function (value) {
    fn.counter = value;
  };

  fn.decrease = function () {
    return fn.counter--;
  };

  return fn;
}

const test1 = makeKounter();

console.log(test1());
console.log(test1());
console.log(test1());
console.log(test1.set(7));
console.log(test1.decrease());
console.log(test1.decrease());
console.log(test1.decrease());
console.log(test1.decrease());
