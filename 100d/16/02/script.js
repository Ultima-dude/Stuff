"use strict"

let list = document.getElementById('tree');

list.addEventListener('click', function(event) {
    let item = event.target;

    if(item.tagName != 'SPAN')
        return;


    if(!list.contains(item))
        return;

    if(item.nextElementSibling)
        item.nextElementSibling.hidden = !item.nextElementSibling.hidden;
});