"use strict";

const users = [
  { name: "John", age: 20, surname: "Johnson" },
  { name: "Pete", age: 18, surname: "Peterson" },
  { name: "Ann", age: 19, surname: "Harthway" },
];

function byField(str) {
  return function (a, b) {
    return a[str] > b[str] ? 1 : -1;
  };
}

console.log(users.sort(byField("name")));
console.log(users.sort(byField("age")));
console.log(users.sort(byField("surname")));
