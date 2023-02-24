"use strict"

//Задачка 1

function sumTo(n) {
  if (n == 1)
    return n;
  else
    return n + sumTo(n - 1);
}

console.log(sumTo(4));
console.log(sumTo(100));

//Задачка 2

function factorial(n) {
  if (n == 1)
    return n;
  else
    return n * factorial(n - 1);
}

console.log(factorial(1));
console.log(factorial(2));
console.log(factorial(3));
console.log(factorial(4));
console.log(factorial(5));

//Задачка 3

function fib(n) {
  let a = 1;
  let b = 1;

  for(let i = 3; i <= n; i++) {
    c = a + b;
    a = b;
    b = c;
  }

  return b;
}

//Задачка 4

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
}

function printList(list) {
  let current = list;
  while(current.next) {
    console.log(current.value);
    current = current.next;
  }
    console.log(current.value);
}

printList(list);

function printListRecursive(list) {
  if (list.next)
    printListRecursive(list.next);

  alert(list.value);
}

printListRecursive(list);
