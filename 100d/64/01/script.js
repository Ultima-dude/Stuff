"use strict"

const buffer = new ArrayBuffer(16);
const view = new Uint32Array(buffer);

console.log(view.BYTES_PER_ELEMENT);

console.log(view.length);
console.log(view.byteLength);

view[0] = 123456;

console.log(view);

for (let num of view) {
  console.log(`${num}: ${typeof num}`);
}
