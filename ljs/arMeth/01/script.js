"use strict"

function camelize(str) {
  let sepWord = str.split('-');
  sepWord.forEach((item, index, array) =>  {
    if (index) {
      array[index]  = item[0].toUpperCase() + item.slice(1)
    }
  });
  return sepWord.join("");
}
