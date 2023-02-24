"use strict"

function aclean (arr) {
  let result = new Map();

  for(let value of arr)
    result.set(value.toLowerCase().split("").sort().join(""), value);
  return Array.from(result.values());
}

let arr = ["ana", "aan", "aaan", "aba", "aab", "baa", "bba"];
