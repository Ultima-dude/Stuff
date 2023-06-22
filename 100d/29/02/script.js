"use strict"

let images = Array.from(document.querySelectorAll('[data-src]'));
console.log(images);

function checkImagePosition() {
    if(!images.length) return;

    for(let i = 0; i < images.length; i++){
        if(images[i].getBoundingClientRect().top < document.documentElement.clientHeight + 40){
            console.log(i);
            images[i].setAttribute('src', images[i].dataset.src);
            images.splice(i--, 1);
        }
    }
    console.log(images);
}

checkImagePosition();

window.addEventListener('scroll', checkImagePosition);