"use strict";

// DOM manipulation

//GetElementbyId()

const title = document.getElementById('main-heading');
console.log(title);

//getElementByClassName()

const listItemClass = document.getElementsByClassName('list-items');
console.log(listItemClass);

//getElementByTagName()

const listItemTag = document.getElementsByTagName('li');
console.log(listItemTag);

//querySelector()

const container = document.querySelector('div');
console.log(container);

//querySelectorAll()

let containers = document.querySelectorAll('div');
console.log(containers);
