"use strict"

let button = document.getElementById('hider');
button.addEventListener('click', function() {
    document.getElementById('text').hidden = !document.getElementById('text').hidden;
});