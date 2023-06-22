"use strict"

let list = document.body.firstElementChild.querySelectorAll('li');

for(let item of list) {
    if(item.querySelectorAll('li').length) {
        item.firstChild.textContent += ' [' + item.querySelectorAll('li').length + ']';
    }
}