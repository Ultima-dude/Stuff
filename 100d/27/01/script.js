"use strict"

let slider = document.getElementById('slider');

slider.addEventListener('mousedown', function(event) {
    if(!event.target.classList.contains('thumb')) return;

    event.preventDefault();

    const thumb = event.target;
    const shiftX = event.clientX - thumb.getBoundingClientRect().left;

    thumb.style.position = 'absolute';
    thumb.style.zIndex = 1000;
    thumb.style.top = `${slider.getBoundingClientRect().top + (slider.offsetHeight - thumb.offsetHeight) / 2}px`;
    slider.append(thumb);

     adjustThumbPosition(event.pageX);

    function adjustThumbPosition(x) {
        const min = slider.getBoundingClientRect().left;
        const max = slider.getBoundingClientRect().left + slider.offsetWidth - thumb.offsetWidth;

        thumb.style.left = `${compare(x, min, max)}px`
    }

    function compare(num, min, max) {
        if(num < min)
            return min + shiftX;
        if(num > max)
            return max;
        return num - shiftX;
    }

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', removeMouseUp);

    function onMouseMove(event) {
        adjustThumbPosition(event.pageX);
    }

    function removeMouseUp() {
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', removeMouseUp);
        console.log('removed');
    }

    slider.ondragstart = function() {
        return false;
    }
});