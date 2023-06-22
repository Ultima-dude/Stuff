"use strict"

let ball = document.getElementById('ball');

ball.style.left = `${(ball.offsetParent.clientWidth - ball.offsetWidth) / 2}px`;
ball.style.top = `${(ball.offsetParent.clientHeight - ball.offsetHeight) / 2}px`;