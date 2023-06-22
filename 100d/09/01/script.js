"use strict"

let div = document.querySelector('div');

function createMessageUnder(elem, html) {
    let message = document.createElement('div');
    let coords = elem.getBoundingClientRect();

    message.style.cssText = 'position:fixed; color:red;'
    message.style.left = coords.left + 'px';
    message.style.top = coords.bottom + 'px';

    message.innerHTML = html;
    return message;
}

console.log(div.getBoundingClientRect());
console.log(document.elementFromPoint(535.8, 200));

document.body.append(createMessageUnder(div, "Hi"));