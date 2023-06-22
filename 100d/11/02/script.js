"use strict"

let ball = document.getElementById('ball');
let field = document.getElementById('field');

field.addEventListener('click', function(event) {
  ball.style.transform = `translateX(${calculateX(ball, field, event)}px) translateY(${calculateY(ball, field, event)}px)`;
});

function calculateX(elem, parent, coord) {
  if(coord.clientX <= parent.offsetLeft + parent.clientLeft + elem.offsetWidth / 2)
    return 0;
  if(coord.clientX >= parent.offsetLeft + parent.offsetWidth - parent.clientLeft -  elem.offsetWidth / 2)
    return parent.clientWidth - elem.offsetWidth;
  
  return coord.clientX - parent.offsetLeft - parent.clientLeft - elem.offsetWidth / 2;
}

function calculateY(elem, parent, coord) {
  if(coord.clientY <= parent.offsetTop + parent.clientTop + elem.offsetHeight / 2)
    return 0;
  if(coord.clientY >= parent.offsetTop + parent.offsetHeight - parent.clientTop -  elem.offsetHeight / 2)
    return parent.clientHeight - elem.offsetHeight;
  return coord.clientY - parent.offsetTop - parent.clientTop - elem.offsetHeight / 2;
}