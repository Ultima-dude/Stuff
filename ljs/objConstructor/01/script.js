"use strict"

function Calculator() {
  this.read = function() {
    this.a = prompt("Цифра 1",);
    this.b = prompt("Цифра 2",);
  },

  this.sum = function() {
    return +this.a + +this.b;
  },

  this.mul = function() {
    return +this.a * +this.b;
  }
}
