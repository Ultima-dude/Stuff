"use strict"

let elem = document.querySelector('.elem');

function scrollBottom() {
    window.scrollBy(0, 100);
}

function scrollTop() {
    window.scrollTo(0, 0);
}

function scrollToElem(elem) {
    elem.scrollIntoView(top);
}

setTimeout(scrollBottom, 2000);
setTimeout(scrollTop, 3000);
setTimeout(scrollToElem, 5000, elem);