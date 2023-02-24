"use strict"

function sumInput() {
  let numbers = [];
  let sum = 0;
  let i = 0;
  while(true) {
    numbers.push(prompt("Введи цифру"));
    if (numbers.at(-1) === null || numbers.at(-1) === '')
      return sum;
    sum += +numbers[i++];
  }
}
