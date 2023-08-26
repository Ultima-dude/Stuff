"use strict"

const promise = new Promise(function (resolve, reject) {
  setTimeout(() => resolve("done"), 2100);
});

promise.then(
  result => console.log(result),
  error => console.log(error)
);

promise.finally(
  console.log("Завершаю")
);
