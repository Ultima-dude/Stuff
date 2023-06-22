"use strict"

let rowsCollection = document.body.firstElementChild.rows;

for(let i = 0; i < rowsCollection.length; i++) {
    rowsCollection[i].cells[i].style.backgroundColor = 'red';
}