"use strict"

function filterRangeInPlace(arr, a, b) {
  for(let i = 0; i < arr.length; i++) {
    if (arr[i] < a || arr[i] > b) {
      arr.splice(i--, 1);
    }
  }
}

let tArr = [1, 2, 3, 4, 5, 6, 7];

filterRangeInPlace(tArr, 3, 6);

console.log(tArr);
