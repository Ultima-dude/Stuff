"use strict"

const arr = new Uint16Array([0, 1, 2, 3, 4]);

console.log(arr);

const arr8 = new Uint8Array(arr);

console.log(arr8);

const arr16 = new Uint16Array(4);

console.log(arr16.BYTES_PER_ELEMENT);
console.log(arr16.byteLength);

const uint8array = new Uint8Array(2);
const num = 256;

console.log(num.toString(2));

uint8array[0] = num;
uint8array[1] = num + 1;

console.log(uint8array);
