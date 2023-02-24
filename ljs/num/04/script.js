"use strict"

function randomInteger(min, max) {
  let randNum;

  do {
    randNum = Math.round(Math.random() * 10);
  } while(randNum < min || randNum > max)

  return randNum;
}
