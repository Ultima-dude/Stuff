"use strict"

let ball = document.getElementById('ball');

ball.ondragstart = function() {
    return false;
}

ball.addEventListener('mousedown', function(event) {
    let shiftX = event.clientX - ball.getBoundingClientRect().left;
    let shiftY = event.clientY - ball.getBoundingClientRect().top;
    let currentDroppable = null;

    ball.style.position = 'absolute';
    ball.style.zIndex = 1000;
    document.body.append(ball);

    moveAt(event.pageX, event.pageY);

    function moveAt(x, y) {
        ball.style.left = `${x - shiftX}px`;
        ball.style.top = `${y - shiftY}px`;
    }

    function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);
        ball.hidden = true;
        let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
        ball.hidden = false;

        if(!elemBelow)
            return;

        let droppableBelow = elemBelow.closest('.droppable');

        if(currentDroppable != droppableBelow) {
            if(currentDroppable)
                currentDroppable.style.background = '';
        }

        currentDroppable = droppableBelow;

        if(currentDroppable)
            currentDroppable.style.background = 'pink';

    }

    document.addEventListener('mousemove', onMouseMove);

    ball.addEventListener('mouseup', function() {
        document.removeEventListener('mousemove', onMouseMove);
    });
});