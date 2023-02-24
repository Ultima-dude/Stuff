"use strict"

let vasya = {
  name: "Vasya",
  age: 25
}

let petya = {
  name: "Petya",
  age: 30
}

let masha = {
  name: "Masha",
  age: 28
}

let arr = [vasya, petya, masha];

sortByAge(arr);

alert(arr[0].name);
alert(arr[1].name);
alert(arr[2].name);

function sortByAge(arr) {
  arr.sort((a, b) => {
    return a.age -b.age
  });
}
