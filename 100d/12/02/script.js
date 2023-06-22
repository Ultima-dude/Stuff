"use strict"

let paneList = document.querySelectorAll('.pane');
for(let pane of paneList) {
    pane.insertAdjacentHTML('afterbegin', '<button class="remove-button">[x]</button>');
    pane.firstElementChild.addEventListener('click', function() {
        pane.hidden = true;
    });
}