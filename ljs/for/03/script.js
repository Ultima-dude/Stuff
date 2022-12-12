"use strict"

let number;

while(1) {
  number = prompt("Введи цифру");
  if (number === null)
    break;
  if (number > 100) {
    alert(number);
    break;
  }

  alert("Введи цифру!!!");
}
