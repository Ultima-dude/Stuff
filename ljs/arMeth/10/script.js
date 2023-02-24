"use strict"

let vasya = {
  name: "Vasya",
  age: 25
};

let petya = {
  name: "Petya",
  age: 30
};

let masha = {
  name: "Masha",
  age: 29
};

let arr = [vasya, petya, masha];

alert(getAverageAge(arr));

function getAverageAge(arr) {
  return arr.reduce((sum, item) => sum += item.age, 0) / arr.length;
}
