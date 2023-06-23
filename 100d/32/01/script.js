"use strict"

const mouse = document.getElementById('mouse');
const directions = {
  "ArrowDown": {
    x: 0,
    y: mouse.offsetHeight
  },

  "ArrowLeft": {
    x: -mouse.offsetWidth,
    y: 0
  },

  "ArrowRight": {
    x: mouse.offsetWidth,
    y: 0
  },

  "ArrowUp": {
    x: 0,
    y: -mouse.offsetHeight
  }
};

mouse.setAttribute("tabindex", '1');
mouse.style.position = 'absolute';

mouse.addEventListener('focus', function(event) {
  this.addEventListener('keydown', directMouse);
});

mouse.addEventListener('blur', function() {
  this.removeEventListener('keydown', directMouse);
});

function directMouse(event) {
  if(event.code in directions)
    shiftMouse(event.code);

  function shiftMouse(str) {
    const top = mouse.getBoundingClientRect().top;
    const left = mouse.getBoundingClientRect().left;

    mouse.style.top = `${top + directions[str].y}px`;
    mouse.style.left = `${left + directions[str].x}px`;
  }
}