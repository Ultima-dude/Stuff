"use strict"

let container = document.getElementById('container');
container.addEventListener('click', function(event) {
    let closeBtn = event.target;

    if(closeBtn.className != 'remove-button')
        return;

    if(!container.contains(closeBtn))
        return;

    closeBtn.closest('div').remove();
});