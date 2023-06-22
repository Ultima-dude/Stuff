"use strict"

let elem = document.getElementById('elem');
let scrollBottom = elem.scrollHeight - elem.scrollTop - elem.clientHeight;
let scrollWidth = elem.offsetWidth - elem.clientLeft - elem.clientWidth;
console.log(scrollWidth);
console.log(scrollBottom);