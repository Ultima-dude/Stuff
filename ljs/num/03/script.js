"use strict"

function random(start, end) {
  if (start > end)
    return "Первая цифра должна быть больше второй";

  if (!checkTwoNumbers(start, end))
    return "Введи цифры!!"

  let randomNum;

  do {
    randomNum = Math.random() * 10;
  } while(randomNum < start || randomNum > end)

  return randomNum;
}

function checkTwoNumbers(num1, num2) {
  return (isFinite(num1) && isFinite(num2) && isNull(num1) && isNull(num2)) ?    true : false;
}

function isNull(num) {
  return (num === null || num === '') ? false : true;
}
