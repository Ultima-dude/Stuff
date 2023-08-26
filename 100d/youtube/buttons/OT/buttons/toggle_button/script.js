"use strict"

const btn = document.querySelector('.toggle_button');

btn.addEventListener('click', function() {
    btn.classList.toggle('active');
});
