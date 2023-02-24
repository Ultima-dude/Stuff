"use strict"

function askNum() {
  let num;

  do {
    num = prompt("Цифру",);
    if (num === null || num === '')
      return null;
  } while(Object.is(+num, NaN) === true)
  return +num;
}
