"use strict"

function min(a, b) {
  return a > b ? b : a;
}

function pow(x, n) {
  let a = x;

  for (let i = 1; i < n; i++) {
    x *= a;
  }

  return x;
}
