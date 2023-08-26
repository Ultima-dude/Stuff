"use strict";

function sum(a, b) {
  console.log(a + b);
}

const obj = {
  num: 2,

  divide(a) {
    console.log(a / this.num);
  },
};

function spy(fn) {
  const func = function (...args) {
    func.calls.push(args);
    fn.apply(this, args);
  };

  func.calls = new Array();

  return func;
}

const test = spy(sum);
obj.divide = spy(obj.divide);

test(4, 6);
test(7, 3);

obj.divide(4);
obj.divide(6);
obj.divide(8);

console.log(test.calls);
console.log(obj.divide.calls);
