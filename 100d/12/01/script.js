"use strict"

let button = document.querySelector('.button');
let indicators = Array.from(document.querySelectorAll('.button span'));
let list = document.querySelector('ul');

button.addEventListener('click', function() {
    indicators.forEach(item => item.hidden = !item.hidden);
    list.hidden = !list.hidden;
});