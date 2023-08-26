"use strict"

function delay(ms) {
  return new Promise(function(resolve, reject) {
    setTimeout(resolve, ms);
  })
}

delay(2000).then(() => console.log("2second delay"));
delay(300).then(() => console.log("test"));
