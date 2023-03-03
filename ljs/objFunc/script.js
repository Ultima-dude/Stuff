"use strict"

//Задачка 1

function makeCounter() {

  function counter() {
    return counter.count++;
  }

  counter.count = 0;

  counter.set = function(value) {
    counter.count = value;
  }

  counter.decrease = function() {
    counter.count -= 1;
  }

  return counter;
}

let test = makeCounter();
/*
console.log(test());
console.log(test());
test.set(7);
console.log(test());
*/
