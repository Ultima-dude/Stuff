"use strict";

function printNumbers(from, to) {
  let currentNum = from;
  let timerId = setInterval(() => console.log(currentNum++), 1000);
  setTimeout(() => clearInterval(timerId), (to - from + 1) * 1000);
}

function printNumbersRecursive(from, to) {
  let currentNum = from;
  let timerId = setTimeout(function num() {
    console.log(currentNum++);
    if (currentNum > to)
      clearTimeout(timerId);
    else
      setTimeout(num, 1000);
  }, 1000);
}
