"use strict"

const dictionary = Object.create(null);

Object.defineProperty(dictionary, "toString", {
  value: function() {
    return Object.keys(this).join(',');
  }
});

dictionary.apple = "Apple";
dictionary.__proto__ = "__proto__";

for (const key in dictionary) {
  console.log(key);
}
