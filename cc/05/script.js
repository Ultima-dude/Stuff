"use strict"

function partial(fn, ...fixedArgs) {
  return function(...args) {
    return fn(...fixedArgs, ...args);
  }
}

function add(a, b) {
  return a + b;
}

function multiply(a, b, c, d) {
  return a * b * c * d;
}

let add1 = partial(add, 2, 3);
let add2 = partial(add, 3);

function partialAny(fn, ...fixedArgs) {
  return function(...args) {
    let finalArgs = fixedArgs.map(item => {
      if (!item)
        return args.shift();
      return item;
    });
    return fn(...finalArgs);
  }
}

function test(a, b, c) {
  return 'a=' + a + ',b=' + b + ',c= '+ c;
}

let test1 = partialAny(test, 1, undefined, 3);
console.log(test1(5));
