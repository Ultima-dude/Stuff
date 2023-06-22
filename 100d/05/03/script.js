"use strict"

let strings = document.querySelectorAll("tbody tr");
let tbody = document.querySelector('tbody');
Array.from(strings)
    .sort((itemA, itemB) => itemA.cells[0].textContent > itemB.cells[0].textContent ? 1 : -1)
        .forEach(item => tbody.append(item));