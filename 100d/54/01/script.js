"use strict"

const head = {
  glasses: 1
};

const table = {
  pen: 3
};

const bed = {
  sheet: 1,
  pillow: 2
};

const pockets = {
  money: 2000
};

pockets.__proto__ = bed;
bed.__proto__ = table;
table.__proto__ = head;
