"use strict"

function* generateSequence(start, end) {
  for(let num = start; num <= end; num++) yield num;
}

function* generatePsswordCodes() {

  yield* generateSequence(48, 57);

  yield* generateSequence(65, 90);

  yield* generateSequence(97, 122);

}

let str = '';

for(let code of generatePsswordCodes()) str += String.fromCharCode(code);

console.log(str);
