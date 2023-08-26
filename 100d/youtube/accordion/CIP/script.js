"use strict"
const head = document.querySelector('.accordion-head');

head.addEventListener('click', toggle);

function toggle() {
    const content = head.nextElementSibling;

    if(content.style.maxHeight) {
        content.style.maxHeight = null;
        content.style.paddingTop = '0px';
        content.style.paddingBottom = '0px';
    } else {
        content.style.maxHeight = content.style.scrollHeight + 64 + 'px';
        content.style.paddingBottom = '24px';
    }

    this.classList.toggle('active');
}
