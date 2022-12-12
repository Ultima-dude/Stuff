"use strict"

let i;
let j;
let userNumber

i = 1;
userNumber = prompt("Введи цифру");

label:
while(i++ <= userNumber) {
  j = 1;

  while(j++ < i - 1) {
    if ((i - 1) % (j - 1) == 0 && j != 2)
      continue label;
  }
  if ((i - 1) % (j - 1) == 0)
    alert(i - 1);
}
