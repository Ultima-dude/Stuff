"use strict"

/* let prev = document.querySelector('.prev');
let next = document.querySelector('.next');
let slider = document.querySelector('ul');
let width = slider.firstElementChild.offsetWidth;
let imgsCount = slider.children.length;
let counter = 0;

function countImagesNum(imgsCount, step) {
    if(counter < Math.abs(step) && counter)
        return counter = 0;
    return counter += (imgsCount - counter - step) > (step - 1) ? step : (imgsCount - counter - step);
}

next.addEventListener('click', function() {
    if(counter < 0)
        counter = 0;
    slider.style.transform = `translateX(-${width * countImagesNum(imgsCount, 3)}px)`;
});

prev.addEventListener('click', function() {
    slider.style.transform = `translateX(-${width * countImagesNum(imgsCount, -3)}px)`
}); */