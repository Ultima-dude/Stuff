"use strict"
let elem = document.getElementById('elem');

function clear(elem) {
    while(elem.firstChild){
        elem.firstChild.remove();
    }
}

clear(elem);