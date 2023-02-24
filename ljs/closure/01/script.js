"use strict"

//Задачка 1

function sum(a) {
  let firstNum = a;

  return function(b) {
    return a + b;
  }
}

//console.log(sum(2)(3));

//Задачка 2

function inBetween(a, b) {
  return item => item >=a && item <=b;
}

function inArray(arr) {
  return item => arr.includes(item);
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8];
//alert(arr.filter(inBetween(2, 4)));
//alert(arr.filter(inArray([2, 7, 9])));

//Задачка 3

let users = [
  {name: 'John', age: 20, surname: 'Johnson'},
  {name: 'Pete', age: 18, surname: 'Peterson'},
  {name: 'Ann', age: 19, surname: 'Hathway'},
]

function byField(str) {
  let fields = {
    name: (a, b) => a.name > b.name ? 1 : -1,
    age: (a, b) => a.age > b.age ? 1 : -1
  }

  return fields[str];
}

//console.log(users.sort(byField('name')));
//console.log(users.sort(byField('age')));

//Задачка 4

function makeArmy() {
  let shooters = [];

  for(let i = 0; i < 10; i++) {
    let shooter = () => alert(i);
    shooters.push(shooter);
  }

  return shooters;
}

let army = makeArmy();

army[0]();
army[5]();
