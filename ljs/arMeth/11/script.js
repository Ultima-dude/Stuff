"use strict"

function unique(arr) {
  for(let i = 0; i < arr.length; i++) {
    for(let j = i + 1; j < arr.length; j++) {
      if (arr[j] && arr[i] == arr[j])
        arr.splice(j--, 1);
    }
  }
}

let arr = [1, 2, 3, 3, 2, 1, 1, 0, 4, 3, 2, 1, 5];

alert(unique(arr));
