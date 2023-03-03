"use strict";

function sum(a, b) {
  console.log(a + b);
}

function throttle(func, ms) {
  let isTrottled = false;
  let savedArgs;
  let savedThis;

  function wrapper() {
    if(isTrottled) {
      savedArgs = arguments;
      savedThis = this;
      return;
    }

    func.apply(this, arguments);

    isTrottled = true;

    setTimeout(function() {
      isTrottled = false;
      if(savedArgs) {
        wrapper.apply(savedThis, savedArgs);
      }
      savedArgs = null;
      savedThis = null;
    }, ms);
  }

  return wrapper;
}

let throttledSum = throttle(sum, 1500);

throttledSum(1, 3);
throttledSum(1, 2);
throttledSum(1, 4);
throttledSum(1, 5);
throttledSum(1, 7);
