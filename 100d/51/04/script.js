"use strict";

function printNumbers(from, to) {
  const timer = setInterval(function () {
    console.log(++from);
    if (from == to) clearInterval(timer);
  }, 1000);
}

printNumbers(13, 20);
