"use strict"

new Promise(function(resolve, reject) {
  setTimeout(() => resolve(1), 1000);
}).then(function(arg) {
  console.log(arg);
  return new Promise(function(resolve, reject) {
    setTimeout(() => resolve(arg * 2), 1000);
  })
}).then(function(num) {
  console.log(num);
  return num * 2
}).then(function(result) {
  console.log(result);
});
