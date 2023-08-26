"use strict";

function throttle(f, ms) {
  let isCooldown = false;
  let lastArgs;
  let lastThis;

  return function wrapper(...args) {
    if (isCooldown) {
      lastArgs = args;
      lastThis = this;
      return;
    }

    isCooldown = true;
    setTimeout(() => {
      isCooldown = false;
      if (lastArgs) {
        wrapper.apply(lastThis, lastArgs);
        lastThis = lastArgs = null;
      }
    }, ms);

    f.apply(this, args);
  };
}

function test(x) {
  console.log(x);
}

const throttled = throttle(test, 500);

throttled(7);
throttled(7);
throttled(6);
throttled(9);
throttled(5);
throttled(3);
