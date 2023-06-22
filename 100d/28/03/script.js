"use strict"

window.addEventListener('scroll', function() {
    document.getElementById('scroll-info').textContent = scrollY + 'px';
});