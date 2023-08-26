"use strict"

const promise = new Promise(function(resolve, reject) {
  setTimeout(() => randomCallbacks(resolve, reject), 1000);
})
.then((result) => {
  console.log("it's done: " + result);
},
(error) => {
  console.log("Error occured: " + error);
});

function randomCallbacks(fn1, fn2) {
  const rand = Math.floor(Math.random(2) * 2);
  console.log(rand);

  rand ? fn1("done") : fn2("Err");
}
