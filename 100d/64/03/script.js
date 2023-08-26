"use strict"

const arr1 = new Uint8Array([0, 1]);
const arr2 = new Uint8Array([2, 3, 4, 5]);

console.log(uint8Concat(arr1, arr2));

function uint8Concat(...arrays) {
  let position = 0;

  const resUint8Arr = new Uint8Array(arrays.reduce((acc, item) => acc += item.length, 0));

  for (const arr of arrays) {
    resUint8Arr.set(arr, position);
    position += arr.length;
  }

  return resUint8Arr;
}
