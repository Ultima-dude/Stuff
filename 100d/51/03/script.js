"use script";

function printNumbers(from, to) {
  const timer = setTimeout(function fn() {
    console.log(++from);
    if (from != to) setTimeout(fn, 1000);
  }, 1000);
}

printNumbers(12, 20);
